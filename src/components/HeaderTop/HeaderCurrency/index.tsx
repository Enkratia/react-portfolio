import React from "react";

import { useAppDispatch } from "../../../redux/store";
import { getCurrencies } from "../../../redux/currencySlice/slice";

import s from "./HeaderCurrency.module.scss";
import cs from "../../../scss/global/_index.module.scss";
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

const apiKey = "be51bff698d5406aac707159009fabf9";

export const HeaderCurrency: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    dispatch(getCurrencies(apiKey));
  }, []);

  const onSelectOptionClick = (option: number) => {
    setActive(option);
  };

  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpen((b) => !b);

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);
        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpen((b) => !b);
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen(false);
        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      setActive(option);
      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div className={s.root}>
      <img className={s.flag} src={currencies[active].imageUrl} alt="Flag" aria-hidden="true" />

      <div
        className={cs.select}
        role="listbox"
        tabIndex={0}
        onKeyDown={onSelectKeyDown}
        onClick={onSelectClick}>
        <div className={`${cs.selectHead} ${cs.selectHeadDark}`}>
          <span className={cs.selectSelected}>{currencies[active].name}</span>
          <AngleDown aria-hidden="true" />
        </div>

        <div
          className={`${cs.selectWrapper} ${cs.selectWrapperDark} ${
            isOpen ? cs.selectWrapperActive : ""
          }`}>
          <ul className={cs.selectList} data-overlayscrollbars-initialize>
            {currencies.map((currency, i) => (
              <li
                key={i}
                tabIndex={0}
                className={`${cs.selectItem} ${active === i ? cs.selectItemActive : ""}`}
                role="option"
                aria-selected={active === i ? "true" : "false"}
                onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                onClick={() => onSelectOptionClick(i)}>
                {currency.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
