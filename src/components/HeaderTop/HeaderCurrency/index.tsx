import React from "react";

// Styles
import s from "./HeaderCurrency.module.scss";

import { AngleDown } from "../../../iconComponents";

const currencies = [
  {
    name: "Eng / $",
    imageUrl: "https://i.ibb.co/bb70S2q/flag-usa.png",
  },
  {
    name: "Ru / ₽",
    imageUrl: "https://i.ibb.co/8PgcwPq/flag-ru.png",
  },
  {
    name: "Eu / €",
    imageUrl: "https://i.ibb.co/JBNZzxr/flag-eu.png",
  },
];

export const HeaderCurrency: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const ulWrapperRef = React.useRef(null);
  const selectRef = React.useRef(null);

  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === ulWrapperRef.current) {
      return;
    }
    setIsOpen(!isOpen);

    function hideSelect(e: MouseEvent) {
      if (selectRef.current && !e.composedPath().includes(selectRef.current)) {
        setIsOpen(false);
        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setIsOpen(!isOpen);
    }
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, index: number) => {
    if (e.key === "Enter") {
      setActive(index);
    }
  };

  return (
    <div className={s.root}>
      <img className={s.flag} src={currencies[active].imageUrl} alt="Flag" aria-hidden="true" />

      <div
        ref={selectRef}
        className={s.select}
        role="listbox"
        tabIndex={0}
        onKeyDown={onSelectKeyDown}
        onClick={onSelectClick}>
        <div className={s.selectHead}>
          <span className={s.selectSelected}>{currencies[active].name}</span>
          <AngleDown aria-hidden="true" />
        </div>

        {isOpen && (
          <div ref={ulWrapperRef} className={s.selectWrapper}>
            <ul className={s.selectList} data-overlayscrollbars-initialize>
              {currencies.map((currency, i) => (
                <li
                  key={i}
                  tabIndex={0}
                  className={`${s.selectItem} ${active === i ? s.selectItemActive : ""}`}
                  role="option"
                  aria-selected={active === i ? "true" : "false"}
                  onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                  onClick={() => setActive(i)}>
                  {currency.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
