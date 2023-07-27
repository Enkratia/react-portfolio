import React from "react";

export const CheckingPayment: React.FC = () => {
  return (
    <ul className="checkout__payment">
      {/* <!-- Box1(Credit card) --> */}
      <li className="checkout__payment-box">
        {/* <!-- Box top --> */}
        <button
          type="button"
          className="checkout__payment-top checkout__payment-top--init"
          aria-expanded="true"
          aria-controls="checkout-payment-bottom-1">
          <label
            className="checkout__payment-radio custom-radio custom-radio--checked"
            role="radiogroup"
            tabIndex={0}
            aria-checked="true">
            <input type="radio" name="checkout-payment-radio" hidden checked />
          </label>

          <span className="checkout__payment-name">Credit card</span>

          <div
            className="checkout__payment-icon checkout__payment-icon--visa"
            aria-hidden="true"></div>
          <div
            className="checkout__payment-icon checkout__payment-icon--mastercard"
            aria-hidden="true"></div>
        </button>

        {/* <!-- Box bottom --> */}
        <div className="checkout__payment-bottom" id="checkout-payment-bottom-1">
          <div className="checkout__payment-bottom-wrapper">
            <div className="checkout__payment-field">
              <label htmlFor="checkout-payment-number" className="checkout__payment-label">
                Card number
              </label>

              <input
                type="text"
                className="checkout__payment-input input"
                id="checkout-payment-number"
                name="checkout-payment-number"
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className="checkout__payment-field">
              <label htmlFor="checkout-payment-date" className="checkout__payment-label">
                Expiry date
              </label>

              <input
                type="text"
                className="checkout__payment-input input"
                id="checkout-payment-date"
                name="checkout-payment-date"
                placeholder="mm/yy"
              />
            </div>

            <div className="checkout__payment-field">
              <label htmlFor="checkout-payment-cvc" className="checkout__payment-label">
                CVC
              </label>

              <input
                type="password"
                className="checkout__payment-input input"
                id="checkout-payment-cvc"
                name="checkout-payment-cvc"
                placeholder="000"
                maxLength={3}
              />
            </div>
          </div>
        </div>
      </li>

      {/* <!-- Box2(PayPal) --> */}
      <li className="checkout__payment-box">
        {/* <!-- Box top --> */}
        <button
          type="button"
          className="checkout__payment-top"
          aria-expanded="false"
          aria-controls="checkout-payment-bottom-2">
          <label
            className="checkout__payment-radio custom-radio"
            role="radiogroup"
            tabIndex={0}
            aria-checked="false">
            <input type="radio" name="checkout-payment-radio" hidden />
          </label>

          <span className="checkout__payment-name">PayPal</span>

          <div
            className="checkout__payment-icon checkout__payment-icon--paypal"
            aria-hidden="true"></div>
        </button>

        {/* <!-- Box bottom --> */}
        <div
          className="checkout__payment-bottom checkout__payment-bottom--pt24"
          id="checkout-payment-bottom-2">
          <div className="checkout__payment-bottom-wrapper">
            <a
              href="#"
              className="checkout__payment-btn checkout__payment-btn--regular"
              aria-label="Pay with Paypal."></a>

            <a
              href="#"
              className="checkout__payment-btn checkout__payment-btn--credit"
              aria-label="Pay with Paypal Credit."></a>
          </div>
        </div>
      </li>

      {/* <!-- Box3(Cash) --> */}
      <li className="checkout__payment-box">
        {/* <!-- Box top --> */}
        <button
          type="button"
          className="checkout__payment-top"
          aria-expanded="false"
          aria-controls="checkout-payment-bottom-3">
          <label
            className="checkout__payment-radio custom-radio"
            role="radiogroup"
            tabIndex={0}
            aria-checked="false">
            <input type="radio" name="checkout-payment-radio" hidden />
          </label>

          <span className="checkout__payment-name">Cash on delivery</span>
        </button>

        {/* <!-- Box bottom --> */}
        <div className="checkout__payment-bottom" id="checkout-payment-bottom-3">
          <div className="checkout__payment-bottom-wrapper">
            <span className="checkout__payment-cash">
              You have selected to pay with cash upon delivery.
            </span>
          </div>
        </div>
      </li>
    </ul>
  );
};
