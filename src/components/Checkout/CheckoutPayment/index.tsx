import { useIMask } from "react-imask";

import React from "react";

import s from "./CheckoutPayment.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const CheckoutPayment: React.FC = () => {
  const activeTab = React.useRef<HTMLDivElement | null>(null);
  const [isActiveTab, setIsActiveTab] = React.useState(0);
  const [isActiveRadio, setIsActiveRadio] = React.useState(0);

  const [opts1] = React.useState({ mask: "0000 0000 0000 0000" });
  const { ref: cardRef } = useIMask(opts1);

  const [opts2] = React.useState({ mask: "00/00" });
  const { ref: dateRef } = useIMask(opts2);

  const onTabClick = (e: React.MouseEvent<HTMLButtonElement>, idx: number) => {
    const bottom = e.currentTarget?.nextElementSibling as HTMLDivElement;
    if (!bottom) return;

    if (activeTab.current) {
      activeTab.current.setAttribute("style", "");
    }

    const bottomScrollHeight = bottom?.scrollHeight;
    bottom.style.height = bottomScrollHeight + "px";
    setIsActiveTab(idx);

    activeTab.current = bottom;
  };

  React.useEffect(() => {
    (activeTab.current?.previousElementSibling as HTMLButtonElement)?.click();
  }, []);

  return (
    <ul className={s.root}>
      {/* <!-- Box1(Credit card) --> */}
      <li className={s.box}>
        {/* <!-- Box top --> */}
        <button
          onClick={(e) => onTabClick(e, 0)}
          type="button"
          className={s.top}
          aria-expanded="true"
          aria-controls="checkout-payment-bottom0">
          <div
            onClick={() => setIsActiveRadio(0)}
            role="radiogroup"
            tabIndex={0}
            className={`${s.radio} ${cs.radio} ${isActiveRadio === 0 ? cs.radioChecked : ""}`}
            aria-label={`Choose credit card as payment method.`}
            aria-checked={isActiveRadio === 0 ? "true" : "false"}>
            <input
              type="radio"
              name="checkout-shipping-radio"
              checked={isActiveRadio === 0 ? true : false}
              hidden
              readOnly
            />
          </div>

          <span className={`${s.name} ${isActiveTab === 0 ? s.nameActive : ""}`}>Credit card</span>

          <div className={`${s.icon} ${s.iconVisa}`} aria-hidden="true"></div>
          <div className={`${s.icon} ${s.iconMastercard}`} aria-hidden="true"></div>
        </button>

        {/* <!-- Box bottom --> */}
        <div ref={activeTab} className={s.bottom} id="checkout-payment-bottom0">
          <div className={s.bottomWrapper}>
            <div className={s.field}>
              <label htmlFor="checkout-payment-number" className={s.label}>
                Card number
              </label>

              <input
                ref={cardRef as React.MutableRefObject<HTMLInputElement>}
                type="text"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-payment-number"
                name="checkout-payment-number"
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className={s.field}>
              <label htmlFor="checkout-payment-date" className={s.label}>
                Expiry date
              </label>

              <input
                ref={dateRef as React.MutableRefObject<HTMLInputElement>}
                type="text"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
                id="checkout-payment-date"
                name="checkout-payment-date"
                placeholder="mm/yy"
              />
            </div>

            <div className={s.field}>
              <label htmlFor="checkout-payment-cvc" className={s.label}>
                CVC
              </label>

              <input
                type="password"
                className={`${s.input} ${cs.input} ${cs.inputLg}`}
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
      <li className={s.box}>
        {/* <!-- Box top --> */}
        <button
          onClick={(e) => onTabClick(e, 1)}
          type="button"
          className={s.top}
          aria-expanded="false"
          aria-controls="checkout-payment-bottom1">
          <div
            onClick={() => setIsActiveRadio(1)}
            role="radiogroup"
            tabIndex={0}
            className={`${s.radio} ${cs.radio} ${isActiveRadio === 1 ? cs.radioChecked : ""}`}
            aria-label={`Choose paypal as payment method.`}
            aria-checked={isActiveRadio === 1 ? "true" : "false"}>
            <input
              type="radio"
              name="checkout-shipping-radio"
              checked={isActiveRadio === 1 ? true : false}
              hidden
              readOnly
            />
          </div>

          <span className={`${s.name} ${isActiveTab === 1 ? s.nameActive : ""}`}>PayPal</span>

          <div className={`${s.icon} ${s.iconPaypal}`} aria-hidden="true"></div>
        </button>

        {/* <!-- Box bottom --> */}
        <div className={s.bottom} id="checkout-payment-bottom1">
          <div className={s.bottomWrapper}>
            <a href="#" className={`${s.btn} ${s.btnRegular}`} aria-label="Pay with Paypal."></a>

            <a
              href="#"
              className={`${s.btn} ${s.btnCredit}`}
              aria-label="Pay with Paypal Credit."></a>
          </div>
        </div>
      </li>

      {/* <!-- Box3(Cash) --> */}
      <li className={s.box}>
        {/* <!-- Box top --> */}
        <button
          onClick={(e) => onTabClick(e, 2)}
          type="button"
          className={s.top}
          aria-expanded="false"
          aria-controls="checkout-payment-bottom2">
          <div
            onClick={() => setIsActiveRadio(2)}
            role="radiogroup"
            tabIndex={0}
            className={`${s.radio} ${cs.radio} ${isActiveRadio === 2 ? cs.radioChecked : ""}`}
            aria-label={`Choose cash on delivery as payment method.`}
            aria-checked={isActiveRadio === 2 ? "true" : "false"}>
            <input
              type="radio"
              name="checkout-shipping-radio"
              checked={isActiveRadio === 2 ? true : false}
              hidden
              readOnly
            />
          </div>

          <span className={`${s.name} ${isActiveTab === 2 ? s.nameActive : ""}`}>
            Cash on delivery
          </span>
        </button>

        {/* <!-- Box bottom --> */}
        <div className={s.bottom} id="checkout-payment-bottom-2">
          <div className={s.bottomWrapper}>
            <span className={s.cash}>You have selected to pay with cash upon delivery.</span>
          </div>
        </div>
      </li>
    </ul>
  );
};
