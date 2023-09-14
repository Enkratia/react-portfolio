import { IMaskInput } from "react-imask";

import React from "react";
import { useImmer } from "use-immer";

import { useGetCitiesQuery, useGetCountriesQuery } from "../../../redux/backendApi";

import { useValidateForm } from "../../../util/customHooks";

import s from "./MyProfile.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { SkeletonMyProfile } from "../../Skeletons";
import { AngleDown, Bin } from "../../../iconComponents";

export const MyProfile: React.FC = () => {
  let countries, cities;
  const phoneRef = React.useRef(null);

  const [showPass1, setShowPass1] = React.useState(false);
  const [showPass2, setShowPass2] = React.useState(false);

  const citiesRef = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useImmer([false, false]);
  const [active, setActive] = useImmer([0, 0]);

  const {
    data: countriesData,
    isUninitialized,
    isLoading: isLoadingCountries,
    isError: isErrorCountries,
  } = useGetCountriesQuery();

  const {
    data: citiesData,
    status,
    isError: isErrorCities,
  } = useGetCitiesQuery(countriesData?.[active[0] - 1] as string, {
    skip: active[0] === 0 || countriesData === undefined,
  });

  const {
    isValidEmail,
    validateEmail,
    isValidPhone,
    validatePhone,
    isValidPassLength,
    validatePassLength,
    isValidText,
    validateText,
    isValidSelect,
    validateSelect,
    isValidPassConfirm,
    validatePassConfirm,
  } = useValidateForm();

  React.useEffect(() => {
    setActive([1, 1]); // Mock
  }, [isUninitialized]);

  if (isErrorCountries || isErrorCities) {
    if (isErrorCountries) {
      console.warn("Failed to load data: 'countries'");
    } else {
      console.warn("Failed to load data: 'cities'");
    }

    alert("Failed to load data");
  }

  const isLoading = isLoadingCountries || !countriesData;

  // **
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

  // **
  const onPhoneChange = (value: string) => {
    // setPhoneValue(value);
    validatePhone(value);
  };

  if (!isLoading) {
    countries = ["Choose your country", ...countriesData];
  } else {
    countries = ["Choose your country"];
  }

  if (status === "fulfilled" && citiesData) {
    cities = ["Choose your city", ...citiesData[0].cities];
  } else {
    cities = ["Choose your city"];
  }

  return (
    <div className={s.root}>
      <div className={s.top}>
        <p className={s.title}>My profile</p>

        <button className={s.delete}>
          <Bin aria-label="true" />
          Delete account
        </button>
      </div>

      {isLoading ? (
        <SkeletonMyProfile />
      ) : (
        <form className={s.form}>
          {/* <!-- Field1 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-first-name" className={s.label}>
              First name
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidText[0]]}`}>
              <input
                onChange={(e) => validateText(e.target.value, 0)}
                type="text"
                className={`${s.input} ${cs.input}`}
                id="profile-form-first-name"
                name="profile-form-first-name"
                placeholder="Your first name"
                defaultValue="Annette"
              />
            </div>
          </div>

          {/* <!-- Field2 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-last-name" className={s.label}>
              Last name
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidText[1]]}`}>
              <input
                onChange={(e) => validateText(e.target.value, 1)}
                type="text"
                className={`${s.input} ${cs.input}`}
                id="profile-form-last-name"
                name="profile-form-last-name"
                placeholder="Your last name"
                defaultValue="Black"
              />
            </div>
          </div>

          {/* <!-- Field3 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-email" className={s.label}>
              Email
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidEmail]}`} data-validity="email">
              <input
                onChange={(e) => validateEmail(e.target.value)}
                type="text"
                className={`${s.input} ${cs.input}`}
                id="profile-form-email"
                name="profile-form-email"
                placeholder="Your working email"
                defaultValue="annetteb@example.com"
              />
            </div>
          </div>

          {/* <!-- Field4 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-phone" className={s.label}>
              Phone
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidPhone]}`}>
              <IMaskInput
                ref={phoneRef}
                mask="(000) 000 00 00"
                onAccept={(value: string) => onPhoneChange(value)}
                type="text"
                className={`${s.input} ${cs.input}`}
                id="profile-form-phone"
                name="profile-form-phone"
                placeholder="Your phone number"
                defaultValue="(629) 555 01 29"
              />
            </div>
          </div>

          {/* <!-- Field5 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-password" className={s.label}>
              New Password
            </label>

            <div
              className={`${cs.inputWrapper} ${cs[isValidPassLength]}`}
              data-validity="pass-length">
              <input
                type={showPass1 ? "text" : "password"}
                className={`${s.input} ${cs.input} ${cs.inputPassword}`}
                id="profile-form-password"
                name="profile-form-password"
                onChange={(e) => validatePassLength(e.target.value)}
              />

              <button
                type="button"
                className={`${s.show} ${showPass1 ? s.show : s.showActive}`}
                aria-label="Show entered password."
                onClick={() => setShowPass1((s) => !s)}></button>
            </div>
          </div>

          {/* <!-- Field6 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-confirm-password" className={s.label}>
              Confirm Password
            </label>

            <div
              className={`${cs.inputWrapper} ${cs[isValidPassConfirm]}`}
              data-validity="pass-confirm">
              <input
                type={showPass2 ? "text" : "password"}
                className={`${s.input} ${cs.input} ${cs.inputPassword}`}
                id="profile-form-confirm-password"
                name="profile-form-confirm-password"
                onChange={(e) => validatePassConfirm(e.target.value)}
              />

              <button
                type="button"
                className={`${s.show} ${showPass2 ? s.show : s.showActive}`}
                aria-label="Show entered password."
                onClick={() => setShowPass2((b) => !b)}></button>
            </div>
          </div>

          {/* <!-- Field7 --> */}
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
                    value={countries[active[0]] || ""}
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

          {/* <!-- Field8 --> */}
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
                    value={cities[active[1]] || ""}
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

          {/* <!-- Field9 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-address" className={s.label}>
              Address
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidText[2]]}`}>
              <input
                onChange={(e) => validateText(e.target.value, 2)}
                type="text"
                className={`${s.input} ${cs.input}`}
                id="profile-form-address"
                name="profile-form-address"
                placeholder="Your address"
                defaultValue="2464 Royal Ln. Mesa, New Jersey"
              />
            </div>
          </div>

          {/* <!-- Field10 --> */}
          <div className={s.field}>
            <label htmlFor="profile-form-zip" className={s.label}>
              ZIP Code
            </label>

            <div className={`${cs.inputWrapper} ${cs[isValidText[3]]}`}>
              <input
                onChange={(e) => validateText(e.target.value, 3)}
                type="text"
                className={`${s.input} ${cs.input}`}
                id="profile-form-zip"
                name="profile-form-zip"
                placeholder="Your ZIP code"
                defaultValue="45463"
              />
            </div>
          </div>

          <button className={`${s.btn} ${cs.btn} ${cs.btnLg}`}>Save changes</button>
        </form>
      )}
    </div>
  );
};
