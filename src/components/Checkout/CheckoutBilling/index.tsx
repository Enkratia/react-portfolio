import React from "react";
import { useImmer } from "use-immer";

import s from "./CheckoutBilling.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown } from "../../../iconComponents";

const countries = ["Choose your country", "Russia", "Nepal", "Peru"];
const cities = ["Choose your city", "Moscow", "Delhi", "Beijing"];

export const CheckoutBilling: React.FC = () => {
  const [isOpen, setIsOpen] = useImmer([false, false]);
  const [active, setActive] = useImmer([0, 0]);

  const onSelectOptionClick = (idx: number, option: number) => {
    setActive((draft) => {
      draft[idx] = option;
      return draft;
    });
  };

  const onSelectClick = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    if (e.target === e.currentTarget.lastElementChild) return;

    const select = e.currentTarget;
    setIsOpen((draft) => {
      draft[idx] = !draft[idx];
      return draft;
    });

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen((draft) => {
          draft[idx] = false;
          return draft;
        });

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, idx: number) => {
    const select = e.currentTarget;

    if (e.key === "Enter") {
      setIsOpen((draft) => {
        draft[idx] = !draft[idx];
        return draft;
      });
    }

    function hideSelect(e: MouseEvent) {
      if (select && !e.composedPath().includes(select)) {
        setIsOpen((draft) => {
          draft[idx] = false;
          return draft;
        });

        document.documentElement.removeEventListener("click", hideSelect);
      }
    }

    document.documentElement.addEventListener("click", hideSelect);
  };

  const onSelectOptionKeyDown = (
    e: React.KeyboardEvent<HTMLLIElement>,
    idx: number,
    option: number,
  ) => {
    if (e.key === "Enter") {
      setActive((draft) => {
        draft[idx] = option;
        return draft;
      });

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  return (
    <>
      <div className={s.root}>
        {/* <!-- Fields --> */}
        <div className={s.fields}>
          {/* <!-- Field1 --> */}
          <div className={s.field}>
            <label htmlFor="checkout-billing-first-name" className={s.label}>
              First Name
            </label>

            <div className={cs.inputWrapper}>
              <input
                type="text"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-billing-first-name"
                name="checkout-billing-first-name"
                placeholder="Your first name"
              />
            </div>
          </div>

          {/* <!-- Field2 --> */}
          <div className={s.field}>
            <label htmlFor="checkout-billing-last-name" className={s.label}>
              Last Name
            </label>

            <div className={cs.inputWrapper}>
              <input
                type="text"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-billing-last-name"
                name="checkout-billing-last-name"
                placeholder="Your last name"
              />
            </div>
          </div>

          {/* <!-- Field3 --> */}
          <div className={s.field}>
            <label htmlFor="checkout-billing-email" className={s.label}>
              Email
            </label>

            <div className={cs.inputWrapper} data-validty="email">
              <input
                type="email"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-billing-email"
                name="checkout-billing-email"
                placeholder="Your working email"
              />
            </div>
          </div>

          {/* <!-- Field4 --> */}
          <div className={s.field}>
            <label htmlFor="checkout-billing-phone" className={s.label}>
              Phone
            </label>

            <div className={cs.inputWrapper}>
              <input
                type="text"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-billing-phone"
                name="checkout-billing-phone"
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* <!-- Field5 --> */}
          <div className={s.field}>
            <label htmlFor="" className={s.label}>
              Country
            </label>

            <div
              className={`${cs.select} ${cs.input} ${cs.inputLg}`}
              role="listbox"
              tabIndex={0}
              onKeyDown={(e) => onSelectKeyDown(e, 0)}
              onClick={(e) => onSelectClick(e, 0)}>
              <div className={`${cs.selectHead} ${active[0] === 0 ? "" : cs.selectHeadActive}`}>
                <span className={cs.selectSelected}>{countries[active[0]]}</span>
                <input
                  type="hidden"
                  className="checkout__billing-country"
                  name="checkout-billing-country"
                  value={cities[active[0]]}
                />
                <AngleDown aria-hidden="true" />
              </div>

              <div
                className={`${cs.selectWrapper} ${cs.input} ${cs.inputLg} ${
                  isOpen[0] ? cs.selectWrapperActive : ""
                }`}>
                <ul className={cs.selectList} data-overlayscrollbars-initialize>
                  {countries.map((country, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${cs.selectItem} ${active[0] === i ? cs.selectItemActive : ""}`}
                      role="option"
                      aria-selected={active[0] === i ? "true" : "false"}
                      onKeyDown={(e) => onSelectOptionKeyDown(e, 0, i)}
                      onClick={() => onSelectOptionClick(0, i)}>
                      {country}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Field6 --> */}
          <div className={s.field}>
            <label htmlFor="" className={s.label}>
              City
            </label>

            <div
              className={`${cs.select} ${cs.input} ${cs.inputLg}`}
              role="listbox"
              tabIndex={0}
              onKeyDown={(e) => onSelectKeyDown(e, 1)}
              onClick={(e) => onSelectClick(e, 1)}>
              <div className={`${cs.selectHead}  ${active[1] === 0 ? "" : cs.selectHeadActive}`}>
                <span className={cs.selectSelected}>{cities[active[1]]}</span>
                <input
                  type="hidden"
                  className="checkout__billing-city"
                  name="checkout-billing-city"
                  value={cities[active[1]]}
                />
                <AngleDown aria-hidden="true" />
              </div>

              <div
                className={`${cs.selectWrapper} ${cs.input} ${cs.inputLg} ${
                  isOpen[1] ? cs.selectWrapperActive : ""
                }`}>
                <ul className={cs.selectList} data-overlayscrollbars-initialize>
                  {cities.map((city, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${cs.selectItem} ${active[1] === i ? cs.selectItemActive : ""}`}
                      role="option"
                      aria-selected={active[1] === i ? "true" : "false"}
                      onKeyDown={(e) => onSelectOptionKeyDown(e, 1, i)}
                      onClick={() => onSelectOptionClick(1, i)}>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Field7 --> */}
        <div className={s.field}>
          <label htmlFor="checkout-billing-address" className={s.label}>
            Address
          </label>

          <div className={cs.inputWrapper}>
            <input
              type="text"
              className={`${s.input} ${cs.input} ${cs.inputLg}`}
              id="checkout-billing-address"
              name="checkout-billing-address"
              placeholder="Your address"
            />
          </div>
        </div>

        {/* <!-- Field8 --> */}
        <div className={s.field}>
          <label htmlFor="checkout-billing-zip" className={s.label}>
            ZIP Code
          </label>

          <div className={cs.inputWrapper}>
            <input
              type="text"
              className={`${s.input} ${cs.input} ${cs.inputLg}`}
              id="checkout-billing-zip"
              name="checkout-billing-zip"
              placeholder="Your ZIP code"
            />
          </div>
        </div>
      </div>

      {/* <!-- Checking --> */}
      <label className="checkout__billing-checking">
        <label
          className="checkout__billing-checkbox custom-checkbox custom-checkbox--checked"
          tabIndex={0}
          role="checkbox"
          aria-checked="true">
          <svg xmlns="http://www.w3.org/2000/svg">
            <use href="./img/sprite.svg#check"></use>
          </svg>

          <input type="hidden" name="checkout-billing-checkbox" value="0" />
          <input
            type="checkbox"
            className="custom-checkbox__input"
            name="checkout-billing-checkbox"
            value="1"
            checked
          />
        </label>

        <span className="checkout__billing-checktext">
          Billing and Shipping details are the same
        </span>
      </label>
    </>
  );
};
