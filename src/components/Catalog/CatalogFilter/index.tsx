import { Decimal } from "decimal.js/decimal";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { OverflowBehavior } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";

import React from "react";
import { useImmer } from "use-immer";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { ProductsType } from "../../../redux/backendApi/types";
import { setType, setPriceType, setCoord } from "../../../redux/catalogSlice/slice";
import { selectCatalogFilters } from "../../../redux/catalogSlice/selectors";
import { selectCurrency } from "../../../redux/currencySlice/selectors";

import { useCurrencySymbol } from "../../../util/customHooks";
import { capitalize } from "../../../util/customFunctions";

import s from "./CatalogFilter.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Check, Search } from "../../../iconComponents";

const mainTitles = ["clothes", "shoes", "accessories"];

type CatalogFilterProps = {
  title: string;
  input: boolean;
  init?: boolean;
  theme?: string;
  allData: ProductsType;
};

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  title,
  allData,
  input,
  theme,
  init,
}) => {
  const isInputChange = React.useRef([false, false]);
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectCatalogFilters);

  const topRef = React.useRef<HTMLButtonElement>(null);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const prevRate = React.useRef<number>();
  const currencySymbol = useCurrencySymbol();
  const { rates, activeRate } = useAppSelector(selectCurrency);
  const rate = rates[activeRate];

  const convertPrice = (price: number) => {
    const convertedResult = new Decimal(price * (rate || 1));
    return convertedResult.toString();
  };

  const reconvertPrice = (price: number) => {
    const reconvertedResult = new Decimal(price / (prevRate.current || 1));
    return convertPrice(+reconvertedResult);
  };

  const unconvertPrice = (price: number) => {
    const unconvertedResult = new Decimal(price / (rate || 1));
    return unconvertedResult.toString();
  };

  const getMinMaxPrice = () => {
    if (allData.length === 0) return ["0", "0"];
    const sortedData = allData.slice().sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });

    const minPrice = convertPrice(sortedData[0].price) as string;
    const maxPrice = convertPrice(sortedData[sortedData.length - 1].price) as string;
    return [minPrice, maxPrice];
  };

  const [generalData, setGeneralData] = React.useState({ price: getMinMaxPrice(), data: allData });
  const [isOpen, setIsOpen] = React.useState(false);
  const [filtered, setFiltered] = React.useState<string[]>();
  const [value, setValue] = useImmer("");

  // **
  const [price, setPrice] = useImmer(filters.price.length === 0 ? getMinMaxPrice() : filters.price); // если сразу в редакс - подвисает слайдер

  React.useEffect(() => {
    if (filters.price.length === 0) {
      setPrice(getMinMaxPrice());
    }
  }, [filters.price]);

  React.useEffect(() => {
    if (!prevRate.current) {
      prevRate.current = rate;
      return;
    }

    if (prevRate.current === rate) {
      return;
    }

    setPrice([reconvertPrice(+price[0]), reconvertPrice(+price[1])]);
    prevRate.current = rate;
  }, [rate]);

  React.useEffect(() => {
    if (init && topRef.current) {
      setIsOpen(true);

      const bottom = topRef.current.nextElementSibling as HTMLDivElement;
      bottom.style.display = "block";

      const bottomHeight = bottom.scrollHeight;
      bottom.style.height = `${bottomHeight}px`;
    }
  }, []);

  React.useEffect(() => {
    setGeneralData({
      price: getMinMaxPrice(),
      data: allData,
    });
  }, [allData, rate]);

  // **
  const getFilterTitle = () => {
    return mainTitles.includes(title) ? "type" : title;
  };
  const filterTitle = getFilterTitle();

  const getCount = (type: string) => {
    const amendedTitle = mainTitles.includes(title) ? "type" : title;

    return generalData.data.filter((product) => {
      return (product[amendedTitle] as string | string[]).includes(type.toLowerCase());
    }).length;
  };

  const formatType = (type: string) => {
    if (["brand", "material", "color"].includes(title)) {
      return capitalize(type);
    }

    if (title === "size") {
      return type.toUpperCase();
    }

    return type
      .split(" ")
      .map((word) => capitalize(word))
      .join(" ");
  };

  const getTypes = () => {
    if (title === "price") return;

    const typesRaw = allData
      .map((product) => {
        return product[filterTitle];
      })
      .flat();

    const types = [...new Set(typesRaw)];
    return types;
  };
  const types = getTypes() as string[];

  // **
  const onAccordionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bottom = e.currentTarget.nextElementSibling as HTMLDivElement;

    if (isOpen) {
      bottom.style.height = "";
      setTimeout(() => (bottom.style.display = "none"), 300);
    } else {
      bottom.style.display = "block";

      const bottomHeight = bottom.scrollHeight;
      bottom.style.height = `${bottomHeight}px`;
    }

    setIsOpen((b) => !b);
  };

  // **
  const onRangeAfterChange = (value: number[]) => {
    const handles = sliderRef.current?.querySelectorAll("[class*=rc-slider-handle]");
    if (!handles) return;
    handles[0].removeAttribute("data-rc-tooltip-1");
    handles[1].removeAttribute("data-rc-tooltip-2");

    dispatch(setPriceType([unconvertPrice(value[0]), unconvertPrice(value[1])]));
    dispatch(setCoord(0));
  };

  const onRangeChange = (value: number[]) => {
    setPrice([value[0].toString(), value[1].toString()]);

    const handles = sliderRef.current?.querySelectorAll("[class*=rc-slider-handle]");
    if (handles) {
      handles[0].setAttribute("data-rc-tooltip-1", currencySymbol + value[0].toFixed(2));
      handles[1].setAttribute("data-rc-tooltip-2", currencySymbol + value[1].toFixed(2));
    }
  };

  const updatePriceInput = (newPrice: string, idx: number) => {
    const newPrices = price.slice();
    newPrices[idx] = newPrice;

    dispatch(setPriceType([unconvertPrice(+newPrices[0]), unconvertPrice(+newPrices[1])]));
    dispatch(setCoord(0));

    setPrice((draft) => {
      draft[idx] = newPrice;
      return draft;
    });
  };

  const onPriceInputBlur = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const regExp = /^0*/g;
    let newPrice = e.target.value;

    if (+newPrice < +generalData.price[0]) {
      newPrice = generalData.price[0];
    }

    if (+newPrice > +generalData.price[1]) {
      newPrice = generalData.price[1];
    }

    newPrice = newPrice.replace(regExp, "");
    updatePriceInput(newPrice, idx);

    isInputChange.current[idx] = false;
  };

  const onPriceInputChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const regExp = /\D/gi;

    const newPrice = e.target.value.replace(regExp, "");
    updatePriceInput(newPrice, idx);

    isInputChange.current[idx] = true;
  };

  // **
  const onSearchBtnClick = () => {
    const filtered = types.filter((type) => type.toLowerCase().includes(value.toLowerCase()));
    setFiltered(filtered);
  };

  const onTypeClick = (e: React.MouseEvent, type: string) => {
    dispatch(setType({ type, title }));
    dispatch(setCoord(e.clientY));

    (e.currentTarget as HTMLElement)?.focus();
  };

  const scrollbarOptions = {
    overflow: {
      x: (theme === "price" ? "visible" : "hidden") as OverflowBehavior,
    },
    scrollbars: {
      theme: s.osThemeFilter,
    },
  };

  return (
    <div className={`${s.root} ${isOpen ? s.rootShow : ""}`}>
      {/* <!-- Filter-top --> */}
      <button ref={topRef} onClick={onAccordionClick} className={s.top}>
        <h3 className={s.title}>{capitalize(title)}</h3>

        <span
          className={`${s.toggle} ${s.toggleShow} ${cs.toggle}`}
          aria-label="Show or hide the list of the categories."></span>
      </button>

      {/* <!-- Filter-bottom --> */}
      <div className={s.bottom}>
        {input && (
          <div className={s.search}>
            <input
              onChange={(e) => setValue(e.currentTarget.value)}
              type="text"
              className={`${s.searchInput} ${cs.input}`}
              placeholder={`Search the ${title} type.`}
            />

            <button
              onClick={onSearchBtnClick}
              className={s.searchBtn}
              aria-label={`Search input ${title}.`}>
              <Search aria-hidden="true" />
            </button>
          </div>
        )}

        <OverlayScrollbarsComponent
          className={theme === "price" ? s.sliderOverlay : ""}
          options={scrollbarOptions}
          defer>
          {theme === "color" ? (
            <div className={s.colorsWrapper}>
              <ul className={s.colors}>
                {types.map((type) => (
                  <li key={type} className={s.colorsItem}>
                    <button
                      onClick={(e) => onTypeClick(e, type)}
                      data-color={type}
                      className={`${cs.colorBtn} ${cs.colorBtnLg} ${
                        filters[filterTitle].includes(type) ? cs.colorBtnActive : ""
                      }`}
                      aria-pressed={filters[filterTitle].includes(type) ? "true" : "false"}
                      aria-label={`Choose ${type} color.`}>
                      <input
                        type="checkbox"
                        name={`catalog-color-${type}`}
                        id={`catalog-color-${type}`}
                        hidden
                        readOnly></input>
                    </button>

                    <label htmlFor={`catalog-color-${type}`} className={s.colorsName}>
                      {formatType(type)}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : theme === "price" ? (
            <div ref={sliderRef} className={s.slider}>
              <div className={s.sliderWrapper}>
                <Slider
                  range
                  min={+generalData.price[0]}
                  max={+generalData.price[1]}
                  allowCross={false}
                  onAfterChange={onRangeAfterChange}
                  onChange={onRangeChange}
                  value={[+price[0], +price[1]]}
                />
              </div>

              <div className={s.sliderInputs}>
                <input
                  min={+generalData.price[0]}
                  max={+generalData.price[1]}
                  onBlur={(e) => onPriceInputBlur(e, 0)}
                  onChange={(e) => onPriceInputChange(e, 0)}
                  value={isInputChange.current[0] ? price[0] : (+price[0]).toFixed(2)}
                  type="text"
                  className={`${s.sliderInput} ${cs.input}`}
                />

                <div className={s.sliderDivider}></div>

                <input
                  min={+generalData.price[0]}
                  max={+generalData.price[1]}
                  onBlur={(e) => onPriceInputBlur(e, 1)}
                  onChange={(e) => onPriceInputChange(e, 1)}
                  value={isInputChange.current[1] ? price[1] : (+price[1]).toFixed(2)}
                  type="text"
                  className={`${s.sliderInput} ${cs.input}`}
                />
              </div>
            </div>
          ) : (
            <ul className={s.list}>
              {filtered && filtered.length === 0 && <li className={s.item}>Not found ...</li>}

              {(filtered || types).map((type, i) => (
                <li key={type} className={s.item}>
                  <div
                    onClick={(e) => onTypeClick(e, type)}
                    className={`${cs.customCheckbox} ${
                      filters[filterTitle].includes(type) ? cs.customCheckboxChecked : ""
                    }`}
                    style={{ marginRight: "13px" }}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={filters[filterTitle].includes(type) ? "true" : "false"}>
                    <Check aria-hidden="true" />

                    <input type="hidden" name={`${title}-checkbox${i}`} defaultValue="0" />

                    <input
                      type="checkbox"
                      id={`${title}-checkbox${i}`}
                      name={`${title}-checkbox${i}`}
                      defaultValue="1"
                      checked={filters[filterTitle].includes(type)}
                      readOnly
                      hidden
                    />
                  </div>

                  <label htmlFor={`${title}-checkbox${i}`} className={s.label}>
                    <span className={s.name}>{formatType(type)}</span>
                    <span className={s.count}>({getCount(type)})</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};
