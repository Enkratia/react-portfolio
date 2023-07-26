import React from "react";

export const CheckingBilling: React.FC = () => {
  return (
    <>
      <div className="checkout__billing">
        {/* <!-- Fields --> */}
        <div className="checkout__billing-fields">
          {/* <!-- Field1 --> */}
          <div className="checkout__billing-field">
            <label htmlFor="checkout-billing-first-name" className="checkout__billing-label">
              First Name
            </label>

            <div className="input-wrapper">
              <input
                type="text"
                className="checkout__billing-input input"
                id="checkout-billing-first-name"
                name="checkout-billing-first-name"
                placeholder="Your first name"
              />
            </div>
          </div>

          {/* <!-- Field2 --> */}
          <div className="checkout__billing-field">
            <label htmlFor="checkout-billing-last-name" className="checkout__billing-label">
              Last Name
            </label>

            <div className="input-wrapper">
              <input
                type="text"
                className="checkout__billing-input input"
                id="checkout-billing-last-name"
                name="checkout-billing-last-name"
                placeholder="Your last name"
              />
            </div>
          </div>

          {/* <!-- Field3 --> */}
          <div className="checkout__billing-field">
            <label htmlFor="checkout-billing-email" className="checkout__billing-label">
              Email
            </label>

            <div className="input-wrapper" data-validty="email">
              <input
                type="email"
                className="checkout__billing-input input"
                id="checkout-billing-email"
                name="checkout-billing-email"
                placeholder="Your working email"
              />
            </div>
          </div>

          {/* <!-- Field4 --> */}
          <div className="checkout__billing-field">
            <label htmlFor="checkout-billing-phone" className="checkout__billing-label">
              Phone
            </label>

            <div className="input-wrapper">
              <input
                type="text"
                className="checkout__billing-input input"
                id="checkout-billing-phone"
                name="checkout-billing-phone"
                placeholder="Your phone number"
              />
            </div>
          </div>

          {/* <!-- Field5 --> */}
          <div className="checkout__billing-field">
            <label htmlFor="" className="checkout__billing-label">
              Country
            </label>

            <div className="custom-select__outer-wrapper checkout__billing-select-outer-wrapper">
              <div
                className="custom-select custom-select--light checkout__billing-sort-select"
                role="listbox"
                tabIndex={0}>
                <input
                  type="hidden"
                  className="checkout__billing-select-hidden"
                  name="checkout-billing-select-hidden"
                />

                <div className="custom-select__head custom-select__head--light checkout__billing-sort-head">
                  <span className="custom-select__selected checkout__billing-sort-selected">
                    Choose your country
                  </span>

                  <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
                    <use href="./img/sprite.svg#angle-down"></use>
                  </svg>
                </div>

                <div className="custom-select__inner-wrapper checkout__billing-sort-wrapper">
                  <ul
                    className="custom-select__list checkout__billing-sort-list"
                    data-overlayscrollbars-initialize>
                    <li
                      className="custom-select__item custom-select__item--active checkout__billing-sort-item"
                      role="option"
                      aria-selected="true">
                      Choose your country
                    </li>

                    <li
                      className="custom-select__item checkout__billing-sort-item"
                      role="option"
                      aria-selected="false">
                      Russia
                    </li>

                    <li
                      className="custom-select__item checkout__billing-sort-item"
                      role="option"
                      aria-selected="false">
                      Nepal
                    </li>

                    <li
                      className="custom-select__item checkout__billing-sort-item"
                      role="option"
                      aria-selected="false">
                      Peru
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Field6 --> */}
          <div className="checkout__billing-field">
            <label htmlFor="" className="checkout__billing-label">
              City
            </label>

            <div className="custom-select__outer-wrapper checkout__billing-select-outer-wrapper">
              <div
                className="custom-select custom-select--light checkout__billing-sort-select"
                role="listbox"
                tabIndex={0}
              />
              <input
                type="hidden"
                className="checkout__billing-select-hidden"
                name="checkout-billing-select-hidden"
              />

              <div className="custom-select__head custom-select__head--light checkout__billing-sort-head">
                <span className="custom-select__selected checkout__billing-sort-selected">
                  Choose your city
                </span>

                <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
                  <use href="./img/sprite.svg#angle-down"></use>
                </svg>
              </div>

              <div className="custom-select__inner-wrapper checkout__billing-sort-wrapper">
                <ul
                  className="custom-select__list checkout__billing-sort-list"
                  data-overlayscrollbars-initialize>
                  <li
                    className="custom-select__item custom-select__item--active checkout__billing-sort-item"
                    role="option"
                    aria-selected="true">
                    Choose your city
                  </li>

                  <li
                    className="custom-select__item checkout__billing-sort-item"
                    role="option"
                    aria-selected="false">
                    Moscow
                  </li>

                  <li
                    className="custom-select__item checkout__billing-sort-item"
                    role="option"
                    aria-selected="false">
                    Delhi
                  </li>

                  <li
                    className="custom-select__item checkout__billing-sort-item"
                    role="option"
                    aria-selected="false">
                    Beijing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Field7 --> */}
        <div className="checkout__billing-field">
          <label htmlFor="checkout-billing-address" className="checkout__billing-label">
            Address
          </label>

          <div className="input-wrapper">
            <input
              type="text"
              className="checkout__billing-input input"
              id="checkout-billing-address"
              name="checkout-billing-address"
              placeholder="Your address"
            />
          </div>
        </div>

        {/* <!-- Field8 --> */}
        <div className="checkout__billing-field">
          <label htmlFor="checkout-billing-zip" className="checkout__billing-label">
            ZIP Code
          </label>

          <div className="input-wrapper">
            <input
              type="text"
              className="checkout__billing-input input"
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
