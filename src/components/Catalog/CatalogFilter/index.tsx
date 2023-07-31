import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import React from "react";
import { useImmer } from "use-immer";

import { ProductsType } from "../../../redux/backendApi/types";

import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import s from "./CatalogFilter.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Check, Search } from "../../../iconComponents";

type CatalogFilterProps = {
  title: string;
  types: string[];
  input: boolean;
  init?: boolean;
  theme?: string;
  data: ProductsType;
};

export const CatalogFilter: React.FC<CatalogFilterProps> = ({
  title,
  types,
  data,
  input,
  theme,
  init,
}) => {
  const topRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [filtered, setFiltered] = React.useState<string[]>();
  const [value, setValue] = useImmer("");
  const [isChecked, setIsChecked] = useImmer([""]);

  React.useEffect(() => {
    if (init && topRef.current) {
      setIsOpen(true);

      const bottom = topRef.current.nextElementSibling as HTMLDivElement;
      const bottomHeight = bottom.scrollHeight;
      bottom.setAttribute("style", `height: ${bottomHeight}px`);
    }
  }, []);

  const capitalize = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const onAccordionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const bottom = e.currentTarget.nextElementSibling as HTMLDivElement;

    if (isOpen) {
      bottom.setAttribute("style", "");
    } else {
      const bottomHeight = bottom.scrollHeight;
      bottom.setAttribute("style", `height: ${bottomHeight}px`);
    }

    setIsOpen((b) => !b);
  };

  const getCount = (type: string) => {
    const amendedTitle =
      title.toLowerCase() === ("clothes" || "shoes" || "accessories")
        ? "type"
        : title.toLowerCase();

    return data.filter((product) => {
      return (product[amendedTitle] as string | string[]).includes(type.toLowerCase());
    }).length;
  };

  const onSearchBtnClick = () => {
    const filtered = types.filter((type) => type.toLowerCase().includes(value.toLowerCase()));
    setFiltered(filtered);
  };

  const onTypeClick = (type: string) => {
    setIsChecked((draft) => {
      if (draft.includes(type)) {
        return draft.filter((el) => el !== type);
      } else {
        return [...draft, type];
      }
    });
  };

  const scrollbarOptions = {
    scrollbars: {
      theme: s.osThemeFilter,
    },
  };

  return (
    <div className={`${s.root} ${isOpen ? s.rootShow : ""}`}>
      {/* <!-- Filter-top --> */}
      <button ref={topRef} onClick={onAccordionClick} className={s.top}>
        <h3 className={s.title}>{title}</h3>

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
              placeholder={`Search the ${title.toLowerCase()} type.`}
            />

            <button
              onClick={onSearchBtnClick}
              className={s.searchBtn}
              aria-label={`Search input ${title}.`}>
              <Search aria-hidden="true" />
            </button>
          </div>
        )}

        <OverlayScrollbarsComponent options={scrollbarOptions} defer>
          {theme === "color" ? (
            <div className={s.colorsWrapper}>
              <ul className={s.colors}>
                {types.map((type) => (
                  <li key={type} className={s.colorsItem}>
                    <button
                      onClick={() => onTypeClick(type)}
                      data-color={type}
                      className={`${cs.colorBtn} ${cs.colorBtnLg} ${
                        isChecked.includes(type) ? cs.colorBtnActive : ""
                      }`}
                      aria-pressed={isChecked.includes(type) ? "true" : "false"}
                      aria-label={`Choose ${type} color.`}>
                      <input
                        type="checkbox"
                        name={`catalog-color-${type}`}
                        id={`catalog-color-${type}`}
                        hidden
                        readOnly></input>
                    </button>

                    <label htmlFor={`catalog-color-${type}`} className={s.colorsName}>
                      {capitalize(type)}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : theme === "price" ? (
            <div className={s.slider}>
              {/* <!--Slider range --> */}
              <Slider range handleStyle={[{}, {}]} />

              {/* <!-- Slider inputs --> */}
              <div className={s.sliderInputs}>
                <input type="text" className={`${s.sliderInput} ${cs.input}`} />
                <div className={s.sliderDivider}></div>
                <input type="text" className={`${s.sliderInput} ${cs.input}`} />
              </div>
            </div>
          ) : (
            <ul className={s.list}>
              {filtered && filtered.length === 0 && <li className={s.item}>Not found ...</li>}

              {(filtered || types).map((type, i) => (
                <li key={type} className={s.item}>
                  <div
                    onClick={() => onTypeClick(type)}
                    className={`${cs.customCheckbox} ${
                      isChecked.includes(type) ? cs.customCheckboxChecked : ""
                    }`}
                    style={{ marginRight: "13px" }}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={isChecked.includes(type) ? "true" : "false"}>
                    <Check aria-hidden="true" />

                    <input type="hidden" name={`${title}-checkbox${i}`} defaultValue="0" />

                    <input
                      type="checkbox"
                      id={`${title}-checkbox${i}`}
                      name={`${title}-checkbox${i}`}
                      defaultValue="1"
                      checked={isChecked.includes(type)}
                      readOnly
                      hidden
                    />
                  </div>

                  <label htmlFor={`${title}-checkbox${i}`} className={s.label}>
                    <span className={s.name}>{type}</span>
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
