import React from "react";
import { Link } from "react-router-dom";

import s from "./Checkout.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Person } from "../../iconComponents";

export const Checkout: React.FC = () => {
  return (
    <section className={s.root}>
      <form className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Left --> */}
        <div className={s.left}>
          {/* <!-- Checkout head --> */}
          <div className={s.head}>
            {/* <!-- Checkout header-top --> */}
            <div className={s.headTop}>
              <h2 className={`${s.headTopTitle} ${cs.sectionTitle}`}>Checkout</h2>

              <Link to={"/"} className={s.headTopBack}>
                Back to shopping
              </Link>
            </div>

            {/* <!-- Checkout header-bottom --> */}
            <div className={s.headBottom}>
              <Person aria-hidden="true" />

              <span className={s.headBottomText}>
                Already have an account?
                <button className={s.headBottomBtn}>Sign in</button>
                for faster checkout experience
              </span>
            </div>
          </div>

          {/* <!-- Checkout list --> */}
          <ul className={s.list}>
            {/* <!-- Checkout item1(Item review) --> */}
            <li className={s.listItem}>
              <h3 className={s.listTitle}>1. Item Review</h3>

              {/* <!-- Checkout products --> */}
            </li>

            {/* <!-- Checkout item2(billing) --> */}
            <li className={s.listItem}>
              <h3 className={s.listTitle}>2. Shipping & Billing Address</h3>

              {/* <!-- Checkout billing --> */}
            </li>

            {/* <!-- Checkout item3(Method) --> */}
            <li className={s.listItem}>
              <h3 className={s.listTitle}>3. Shipping Method</h3>

              {/* <!-- Checkout method --> */}
            </li>

            {/* <!-- Checkout item4(Payment) --> */}
            <li className={s.listItem}>
              <h3 className={s.listTitle}>4. Payment Method</h3>

              {/* <!-- Checkout payment --> */}
            </li>

            {/* <!-- Checkout item5(Additional) --> */}
            <li className={s.listItem}>
              <h3 className={s.listTitle}>5. Additional Information (Optional)</h3>

              <label htmlFor="checkout-additional-textarea" className={s.label}>
                Order notes
              </label>

              <textarea
                className={`${s.textarea} ${cs.input}`}
                name="checkout-additional-textarea"
                id="checkout-additional-textarea"
                placeholder="Notes about your order, e.g. special noted for delivery."></textarea>
            </li>
          </ul>
        </div>

        {/* <!-- Right --> */}
        <div className={s.right}>{/* <!-- Content --> */}</div>
      </form>
    </section>
  );
};
