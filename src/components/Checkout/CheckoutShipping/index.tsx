import React from "react";
import { useGetShippingMethodsQuery } from "../../../redux/backendApi";

import s from "./CheckoutShipping.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const CheckoutShipping: React.FC = () => {
  const [isActive, setIsActive] = React.useState(0);
  const { data } = useGetShippingMethodsQuery();

  if (!data) return;

  return (
    <ul className={s.root}>
      {data.map((method, i) => (
        <li key={i} className={s.box}>
          <div
            onClick={() => setIsActive(i)}
            role="radiogroup"
            tabIndex={0}
            className={`${s.radio} ${cs.radio} ${isActive === i ? cs.radioChecked : ""}`}
            aria-label={`Choose ${method.destination} shipping method.`}
            aria-checked={isActive === i ? "true" : "false"}>
            <input
              type="radio"
              id={`checkout-shipping-radio${i}`}
              name="checkout-shipping-radio"
              checked={isActive === i ? true : false}
              hidden
              readOnly
            />
          </div>

          <label htmlFor={`checkout-shipping-radio${i}`} className={s.label}>
            <div className={s.info}>
              <span className={s.destination}>{method.destination}</span>
              <span className={s.date}>{method.date}</span>
            </div>

            <span className={s.price}>{method.price}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
