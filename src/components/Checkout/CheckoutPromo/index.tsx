import React from "react";

import s from "./CheckoutPromo.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const CheckoutPromo: React.FC = () => {
  return (
    <>
      {/* <!-- Promo --> */}
      <div className={s.root}>
        <label className={s.label} htmlFor="checkout-promo-input">
          Apply a promo code
        </label>

        <div className={s.field}>
          <input
            type="text"
            className={`${s.input} ${cs.input}`}
            name="checkout-promo-input"
            id="checkout-promo-input"
            placeholder="Enter promo code"
          />

          <button type="button" className={`${s.btn} ${cs.btn} ${cs.btnLg}`}>
            Apply
          </button>
        </div>
      </div>

      {/* <!-- Totals --> */}
      <div className={s.totals}>
        <h3 className={s.totalsTitle}>Order totals</h3>

        <ul className={s.totalsInfo}>
          <li className={`${s.totalsItem} ${s.totalsItemSubtotal}`}>
            <span className={s.totalsName}>Subtotal:</span>
            <span className={s.totalsSum} data-totals="subtotal">
              —
            </span>
          </li>

          <li className={s.totalsItem}>
            <span className={s.totalsName}>Shipping costs:</span>
            <span className={s.totalsSum} data-totals="shipping">
              $25.00
            </span>
          </li>

          <li className={s.totalsItem}>
            <span className={s.totalsName}>Discount:</span>
            <span className={s.totalsSum} data-totals="discount">
              —
            </span>
          </li>

          <li className={s.totalsItem}>
            <span className={s.totalsName}>Estimated sales tax:</span>
            <span className={s.totalsSum} data-totals="tax">
              —
            </span>
          </li>
        </ul>

        <div className={s.total}>
          <span className={s.totalsName}>Order total:</span>
          <span className={s.totalsSum}>—</span>
        </div>
      </div>

      {/* <!-- Complete --> */}
      <button type="submit" className={`${s.complete} ${cs.btn} ${cs.btnLg} ${cs.btnDisabled}`}>
        Complete order
      </button>
    </>
  );
};
