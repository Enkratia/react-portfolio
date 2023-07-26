import React from "react";

export const CheckoutPromo: React.FC = () => {
  return (
    <div className="checkout__right-wrapper">
      {/* <!-- Promo --> */}
      <div className="checkout__promo">
        <label className="checkout__promo-label" htmlFor="checkout-promo-input">
          Apply a promo code
        </label>

        <div className="checkout__promo-field">
          <input
            type="text"
            className="checkout__promo-input input"
            name="checkout-promo-input"
            id="checkout-promo-input"
            placeholder="Enter promo code"
          />

          <button type="button" className="checkout__promo-btn btn btn--lg">
            Apply
          </button>
        </div>
      </div>

      {/* <!-- Totals --> */}
      <div className="checkout__totals">
        <h4 className="checkout__totals-title">Order totals</h4>

        <ul className="checkout__totals-info">
          <li className="checkout__totals-item checkout__totals-item--subtotal">
            <span className="checkout__totals-name">Subtotal:</span>

            <span className="checkout__totals-sum" data-totals="subtotal">
              —
            </span>
          </li>

          <li className="checkout__totals-item">
            <span className="checkout__totals-name">Shipping costs:</span>

            <span className="checkout__totals-sum" data-totals="shipping">
              $25.00
            </span>
          </li>

          <li className="checkout__totals-item">
            <span className="checkout__totals-name">Discount:</span>

            <span className="checkout__totals-sum" data-totals="discount">
              —
            </span>
          </li>

          <li className="checkout__totals-item">
            <span className="checkout__totals-name">Estimated sales tax:</span>

            <span className="checkout__totals-sum" data-totals="tax">
              —
            </span>
          </li>
        </ul>

        <div className="checkout__totals-total">
          <span className="checkout__totals-total-name">Order total:</span>

          <span className="checkout__totals-total-sum">—</span>
        </div>
      </div>

      {/* <!-- Complete --> */}
      <button type="submit" className="checkout__complete btn btn--lg btn--disabled">
        Complete order
      </button>
    </div>
  );
};
