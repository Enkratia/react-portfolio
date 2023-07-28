import { useIMask } from "react-imask";

import React from "react";
import { useImmer } from "use-immer";
import { useGetCitiesQuery, useGetCountriesQuery } from "../../../redux/backendApi";

import { useValidateForm } from "../../../util/customHooks";

import s from "./CheckoutBilling.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { AngleDown, Check } from "../../../iconComponents";

export const CheckoutBilling: React.FC = () => {
  const citiesRef = React.useRef<HTMLDivElement>(null);
  const [opts] = React.useState({ mask: "(000) 000 00 00" });
  const { ref: phoneRef } = useIMask(opts);

  const [isChecked, setIsChecked] = useImmer(true);
  const [isOpen, setIsOpen] = useImmer([false, false]);
  const [active, setActive] = useImmer([0, 0]);

  const { data: countriesData } = useGetCountriesQuery();

  const { data: citiesData, status } = useGetCitiesQuery(countriesData?.[active[0] - 1] as string, {
    skip: active[0] === 0 || countriesData === undefined,
  });

  const {
    isValidText,
    validateText,
    isValidEmail,
    validateEmail,
    isValidPhone,
    validatePhone,
    isValidSelect,
    validateSelect,
  } = useValidateForm();

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

  const onSelectOptionClick = (e: React.MouseEvent<HTMLLIElement>, idx: number, option: number) => {
    setActive((draft) => {
      draft[idx] = option;

      if (idx === 0) draft[1] = 0;
      return draft;
    });

    validateSelect(e.currentTarget, idx);
    if (idx === 0 && active[1] !== 0) {
      const defaultCityOption = citiesRef.current?.querySelector("ul")?.firstElementChild;
      validateSelect(defaultCityOption as HTMLLIElement, 1);
    }
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

      validateSelect(e.currentTarget, idx);

      (e.currentTarget.closest('[role="listbox"]') as HTMLDivElement)?.focus();
    }
  };

  if (!countriesData) return;
  const countries = ["Choose your country", ...countriesData];
  let cities;

  if (status === "fulfilled" && citiesData) {
    cities = ["Choose your city", ...citiesData[0].cities];
  } else {
    cities = ["Choose your city"];
  }

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

            <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
              <input
                onChange={(e) => validateText(e, 0)}
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

            <div className={`${cs.inputWrapper} ${cs[isValidText[1]]}`}>
              <input
                onChange={(e) => validateText(e, 1)}
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

            <div className={`${cs.inputWrapper} ${cs[isValidEmail]}`} data-validity="email">
              <input
                onChange={validateEmail}
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

            <div className={`${cs.inputWrapper} ${cs[isValidPhone]}`}>
              <input
                ref={phoneRef as React.MutableRefObject<HTMLInputElement>}
                onChange={validatePhone}
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

            <div className={`${cs.inputWrapper} ${cs[isValidSelect[0]]}`}>
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
                    value={countries[active[0]]}
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
                        onClick={(e) => onSelectOptionClick(e, 0, i)}>
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Field6 --> */}
          <div className={s.field}>
            <label htmlFor="" className={s.label}>
              City
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidSelect[1]]}`}>
              <div
                ref={citiesRef}
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
                        onClick={(e) => onSelectOptionClick(e, 1, i)}>
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

            <div className={`${cs.inputWrapper} ${cs[isValidText[2]]}`}>
              <input
                onChange={(e) => validateText(e, 2)}
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

            <div className={`${cs.inputWrapper} ${cs[isValidText[3]]}`}>
              <input
                onChange={(e) => validateText(e, 3)}
                type="text"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-billing-zip"
                name="checkout-billing-zip"
                placeholder="Your ZIP code"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Checking --> */}
      <div className={s.checking}>
        <div
          onClick={() => setIsChecked((b) => !b)}
          className={`${cs.customCheckbox} ${isChecked ? cs.customCheckboxChecked : ""}`}
          style={{ marginRight: "13px" }}
          tabIndex={0}
          role="checkbox"
          aria-checked={isChecked ? "true" : "false"}>
          <Check aria-hidden="true" />

          <input type="hidden" name="custom-billing-checkbox" defaultValue="0" />

          <input
            type="checkbox"
            id="custom-billing-checkbox"
            name="checkout-billing-checkbox"
            className="custom-checkbox__input"
            defaultValue="1"
            checked={isChecked}
            readOnly
            hidden
          />
        </div>

        <label htmlFor="custom-billing-checkbox" className={s.checktext}>
          Billing and Shipping details are the same
        </label>
      </div>
    </>
  );
};
