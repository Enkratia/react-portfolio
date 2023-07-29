import React from "react";
import { useGetShippingMethodsQuery } from "../../../redux/backendApi";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setIsActiveShip } from "../../../redux/shippingSlice/slice";
import { selectShipping } from "../../../redux/shippingSlice/selectors";

import s from "./CheckoutShipping.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const CheckoutShipping: React.FC = () => {
  const dispatch = useAppDispatch();
  const isActiveShip = useAppSelector(selectShipping);
  const { data } = useGetShippingMethodsQuery();

  const amendPrice = (price: string) => {
    if (!price.includes("Free")) return "$" + price;
    return price;
  };

  if (!data) return;

  return (
    <ul className={s.root}>
      {data.map((method, i) => (
        <li key={i} className={s.box}>
          <div
            onClick={() => dispatch(setIsActiveShip(i))}
            role="radiogroup"
            tabIndex={0}
            className={`${s.radio} ${cs.radio} ${isActiveShip === i ? cs.radioChecked : ""}`}
            aria-label={`Choose ${method.destination} shipping method.`}
            aria-checked={isActiveShip === i ? "true" : "false"}>
            <input
              type="radio"
              id={`checkout-shipping-radio${i}`}
              name="checkout-shipping-radio"
              checked={isActiveShip === i ? true : false}
              hidden
              readOnly
            />
          </div>

          <label htmlFor={`checkout-shipping-radio${i}`} className={s.label}>
            <div className={s.info}>
              <span className={s.destination}>{method.destination}</span>
              <span className={s.date}>{method.date}</span>
            </div>

            <span className={s.price}>{amendPrice(method.price)}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
