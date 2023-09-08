import { Decimal } from "decimal.js/decimal";

import React from "react";

import { useGetShippingMethodsQuery } from "../../../redux/backendApi";
import { useAppSelector } from "../../../redux/store";
import { selectCartProducts } from "../../../redux/cartSlice/selectors";

import { useCartSum } from "../../../util/customHooks";

import s from "./CheckoutPromo.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { selectShipping } from "../../../redux/shippingSlice/selectors";

export const CheckoutPromo: React.FC = () => {
  const [isValidPromo, setIsValidPromo] = React.useState(false);
  const { data: shipping } = useGetShippingMethodsQuery();
  const isActiveShip = useAppSelector(selectShipping);
  const cartProducts = useAppSelector(selectCartProducts);

  const { subtotal, discount } = useCartSum(cartProducts);

  const getShippingPrice = () => {
    if (shipping) {
      return shipping[isActiveShip].price === "Free" ? "Free" : "$" + shipping[isActiveShip].price;
    } else {
      return "—";
    }
  };

  const getTotalPrice = () => {
    if (subtotal !== "0" && shipping) {
      const shippingPrice =
        shipping[isActiveShip].price === "Free" ? 0 : +shipping[isActiveShip].price;
      const sum = Decimal.sum(+subtotal, shippingPrice).toFixed(2);
      return "$" + sum;
    } else {
      return "—";
    }
  };

  const onPromoCodeClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 0) {
      setIsValidPromo(true);
    } else {
      setIsValidPromo(false);
    }
  };

  return (
    <>
      {/* <!-- Promo --> */}
      <div className={s.root}>
        <label className={s.label} htmlFor="checkout-promo-input">
          Apply a promo code
        </label>

        <div className={s.field}>
          <input
            onChange={onPromoCodeClick}
            type="text"
            className={`${s.input} ${cs.input}`}
            name="checkout-promo-input"
            id="checkout-promo-input"
            placeholder="Enter promo code"
          />

          <button
            type="button"
            className={`${s.btn} ${cs.btn} ${cs.btnLg} ${isValidPromo ? "" : cs.btnDisabled}`}>
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
              {subtotal === "0" ? "—" : "$" + subtotal}
            </span>
          </li>

          <li className={s.totalsItem}>
            <span className={s.totalsName}>Shipping costs:</span>
            <span className={s.totalsSum} data-totals="shipping">
              {getShippingPrice()}
            </span>
          </li>

          <li className={s.totalsItem}>
            <span className={s.totalsName}>Discount:</span>
            <span className={s.totalsSum} data-totals="discount">
              {discount === "0" ? "—" : "$" + discount}
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
          <span className={s.totalsSum}>{getTotalPrice()}</span>
        </div>
      </div>

      {/* <!-- Complete --> */}
      <button type="submit" className={`${s.complete} ${cs.btn} ${cs.btnLg} ${cs.btnDisabled}`}>
        Complete order
      </button>
    </>
  );
};
