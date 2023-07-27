import React from "react";

export const CheckoutMethod: React.FC = () => {
  return (
    <ul className="checkout__method">
      {/* <!-- Box1 --> */}
      <li className="checkout__method-box">
        <label
          className="checkout__method-radio custom-radio custom-radio--checked"
          role="radiogroup"
          tabIndex={0}
          aria-checked="true">
          <input type="radio" name="checkout-method-radio" hidden checked />
        </label>

        <div className="checkout__method-info">
          <span className="checkout__method-destination">Courier to your address</span>

          <span className="checkout__method-date">Estimated date: September 9</span>
        </div>

        <span className="checkout__method-price">$25.00</span>
      </li>

      {/* <!-- Box2 --> */}
      <li className="checkout__method-box">
        <label
          className="checkout__method-radio custom-radio"
          role="radiogroup"
          tabIndex={0}
          aria-checked="false">
          <input type="radio" name="checkout-method-radio" hidden />
        </label>

        <div className="checkout__method-info">
          <span className="checkout__method-destination">Pick up from store</span>

          <span className="checkout__method-date">Pick up on September 8 from 12:00</span>
        </div>

        <span className="checkout__method-price">Free</span>
      </li>

      {/* <!-- Box3 --> */}
      <li className="checkout__method-box">
        <label
          className="checkout__method-radio custom-radio"
          role="radiogroup"
          tabIndex={0}
          aria-checked="false">
          <input type="radio" name="checkout-method-radio" hidden />
        </label>

        <div className="checkout__method-info">
          <span className="checkout__method-destination">UPS Ground Shipping</span>

          <span className="checkout__method-date">Up to one week</span>
        </div>

        <span className="checkout__method-price">$10.00</span>
      </li>

      {/* <!-- Box4 --> */}
      <li className="checkout__method-box">
        <label
          className="checkout__method-radio custom-radio"
          role="radiogroup"
          tabIndex={0}
          aria-checked="false">
          <input type="radio" name="checkout-method-radio" hidden />
        </label>

        <div className="checkout__method-info">
          <span className="checkout__method-destination">Pick up at Createx Locker</span>

          <span className="checkout__method-date">Pick up on September 8 from 12:00</span>
        </div>

        <span className="checkout__method-price">$8.50</span>
      </li>

      {/* <!-- Box5 --> */}
      <li className="checkout__method-box">
        <label
          className="checkout__method-radio custom-radio"
          role="radiogroup"
          tabIndex={0}
          aria-checked="false">
          <input type="radio" name="checkout-method-radio" hidden />
        </label>

        <div className="checkout__method-info">
          <span className="checkout__method-destination">Createx Global Export</span>

          <span className="checkout__method-date">3-4 days</span>
        </div>

        <span className="checkout__method-price">$15.00</span>
      </li>
    </ul>
  );
};
