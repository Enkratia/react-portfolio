import React from "react";
import { useImmer } from "use-immer";

import { ProductsType } from "../../../redux/backendApi/types";

import s from "./CatalogFilter1.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Check, Search } from "../../../iconComponents";

const clothes = [
  "Coats",
  "Jackets",
  "Suits",
  "Dresses",
  "Cardigans & sweaters",
  "Sweatshirts & hoodies",
  "T-shirts & tops",
  "Pants",
];

type CatalogGridProps = {
  data: ProductsType;
};

export const CatalogFilter1: React.FC<CatalogGridProps> = ({ data }) => {
  const [filtered, setFiltered] = React.useState<string[]>();
  const [value, setValue] = useImmer("");
  const [isChecked, setIsChecked] = useImmer([""]);

  const getCount = (type: string) => {
    return data.filter((product) => product.object === type.toLowerCase()).length;
  };

  const onSearchBtnClick = () => {
    const filtered = clothes.filter((type) => type.toLowerCase().includes(value.toLowerCase()));
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

  return (
    <div className={`${s.root} ${s.rootShow}`}>
      {/* <!-- Filter-top --> */}
      <div className={s.top}>
        <h3 className={s.title}>Clothes</h3>

        <button
          className={`${s.toggle} ${s.toggleShow} ${cs.toggle}`}
          aria-label="Show or hide the list of the categories."></button>
      </div>

      {/* <!-- Filter-bottom --> */}
      <div className={s.bottom}>
        <div className={s.search}>
          <input
            onChange={(e) => setValue(e.currentTarget.value)}
            type="text"
            className={`${s.searchInput} ${cs.input}`}
            placeholder="Search the clothes type."
          />

          <button
            onClick={onSearchBtnClick}
            className={s.searchBtn}
            aria-label="Search input clothes.">
            <Search aria-hidden="true" />
          </button>
        </div>

        <ul className={s.list} data-overlayscrollbars-initialize>
          {filtered && filtered.length === 0 && <li className={s.item}>Not found ...</li>}

          {(filtered || clothes).map((type, i) => (
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

                <input type="hidden" name={`clothes-checkbox${i}`} defaultValue="0" />

                <input
                  type="checkbox"
                  id={`clothes-checkbox${i}`}
                  name={`clothes-checkbox${i}`}
                  defaultValue="1"
                  checked={isChecked.includes(type)}
                  readOnly
                  hidden
                />
              </div>

              <label htmlFor={`clothes-checkbox${i}`} className={s.label}>
                <span className={s.name}>{type}</span>
                <span className={s.count}>({getCount(type)})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
