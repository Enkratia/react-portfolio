import Decimal from "decimal.js";

import React from "react";
import { useGetShippingMethodsQuery } from "../../../redux/backendApi";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setIsActiveShip } from "../../../redux/shippingSlice/slice";
import { selectShipping } from "../../../redux/shippingSlice/selectors";
import { selectCurrency } from "../../../redux/currencySlice/selectors";

import { useCurrencySymbol } from "../../../util/customHooks";

import s from "./CheckoutShipping.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { SkeletonCheckoutShipping } from "../../Skeletons";

export const CheckoutShipping: React.FC = () => {
  const dispatch = useAppDispatch();
  const isActiveShip = useAppSelector(selectShipping);
  const { data, isLoading, isError } = useGetShippingMethodsQuery();

  const currencySymbol = useCurrencySymbol();
  const { rates, activeRate } = useAppSelector(selectCurrency);
  const rate = rates[activeRate];

  const amendPrice = (price: string) => {
    if (price === "Free") {
      return price;
    } else {
      const convertedPrice = new Decimal(+price * (rate || 1)).toFixed(2);
      return currencySymbol + convertedPrice;
    }
  };

  if (isError) {
    console.log("Failed to load data: 'checkout-shipping'");
    alert("Failed to load shipping data");
  }

  if (isLoading || !data) {
    return <SkeletonCheckoutShipping />;
  }

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
