import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getCurrencies, CurrencyInfoEnum, setCurrency } from "../../../redux/currencySlice/slice";
import { selectCurrency } from "../../../redux/currencySlice/selectors";

import s from "./HeaderCurrency.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown } from "../../../iconComponents";

export const currencies = [
  {
    name: "Eng",
    symbol: "$",
    imageUrl: "https://i.ibb.co/bb70S2q/flag-usa.png",
    sort: CurrencyInfoEnum.USD,
  },
  {
    name: "Eu",
    symbol: "€",
    imageUrl: "https://i.ibb.co/JBNZzxr/flag-eu.png",
    sort: CurrencyInfoEnum.EUR,
  },
  {
    name: "Ru",
    symbol: "₽",
    imageUrl: "https://i.ibb.co/8PgcwPq/flag-ru.png",
    sort: CurrencyInfoEnum.RUB,
  },
];

const apiKey = "be51bff698d5406aac707159009fabf9";

export const HeaderCurrency: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const { rates, activeRate } = useAppSelector(selectCurrency);
  const activeRateIdx = currencies.findIndex((currency) => currency.sort === activeRate);

  React.useEffect(() => {
    dispatch(getCurrencies(apiKey));
  }, []);

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

  const onSelectOptionClick = (option: number) => {
    const newCurrency = currencies[option].sort;

    if (rates[newCurrency]) {
      dispatch(setCurrency(newCurrency));
    } else {
      alert("Couldn't change the currency.");
      console.warn("Couldn't change the currency.");
    }
  };

  const onSelectOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, option: number) => {
    if (e.key === "Enter") {
      const newCurrency = currencies[option].sort;

      if (rates[newCurrency]) {
        dispatch(setCurrency(newCurrency));
      } else {
        alert("Couldn't change the currency.");
        console.warn("Couldn't change the currency.");
      }

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <div className={s.root}>
      <img
        className={s.flag}
        src={currencies[activeRateIdx].imageUrl}
        alt="Flag"
        aria-hidden="true"
      />

      <div
        className={cs.select}
        role="listbox"
        tabIndex={0}
        onKeyDown={onSelectKeyDown}
        onClick={onSelectClick}>
        <div className={`${cs.selectHead} ${cs.selectHeadDark}`}>
          <span
            className={
              cs.selectSelected
            }>{`${currencies[activeRateIdx].name} / ${currencies[activeRateIdx].symbol}`}</span>
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
                className={`${cs.selectItem} ${activeRateIdx === i ? cs.selectItemActive : ""}`}
                role="option"
                aria-selected={activeRateIdx === i ? "true" : "false"}
                onKeyDown={(e) => onSelectOptionKeyDown(e, i)}
                onClick={() => onSelectOptionClick(i)}>
                {`${currency.name} / ${currency.symbol}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
