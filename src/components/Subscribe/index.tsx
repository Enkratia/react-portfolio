import React from "react";
import { useImmer } from "use-immer";

import s from "./Subscribe.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Check } from "../../iconComponents";

const categories = ["Women", "Men", "Girls", "Boys"];

export const Subscribe: React.FC = () => {
  const [isActive, setIsActive] = useImmer([false, false, false, false]);
  const [isChecked, setIsChecked] = useImmer(true);

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Subscription for our updates</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Left --> */}
        <div className={s.left}>
          <p className={`${s.title} ${cs.sectionTitle}`}>Subscribe for updates</p>

          <span className={s.subtitle}>
            Subscribe for exclusive early sale access and new arrivals.
          </span>

          {/* <!-- Form --> */}
          <form className={s.form}>
            <ul className={s.categories}>
              {categories.map((category, i) => (
                <li key={i} className={s.categoriesItem}>
                  <button
                    onClick={() =>
                      setIsActive((draft) => draft.map((el, idx) => (idx === i ? !el : el)))
                    }
                    type="button"
                    className={`${s.categoriesBtn} ${cs.btn} ${cs.btnOutline} ${
                      isActive[i] ? s.categoriesBtnChecked : ""
                    }`}
                    aria-pressed={isActive[i] ? "true" : "false"}>
                    {category}
                    <input type="hidden" name={`subscribe-${category}-checkbox`} defaultValue="0" />
                    <input
                      type="checkbox"
                      name={`subscribe-${category}-checkbox`}
                      defaultValue="1"
                      checked={isActive[i]}
                      readOnly
                      hidden
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* <!-- Email --> */}
            <div className={s.email}>
              <label htmlFor="subscribe-input" className={s.emailLabel}>
                Email
              </label>

              <div className={s.emailField}>
                <input
                  type="email"
                  className={`${s.emailInput} ${cs.input}`}
                  id="subscribe-input"
                  name="subscribe-input"
                  placeholder="Your working email"
                />

                <button className={`${s.emailBtn} ${cs.btn} ${cs.btnLg}`}>Subscribe</button>
              </div>
            </div>

            {/* <!-- Agreement --> */}
            <div className={s.agreement}>
              <div
                onClick={() => setIsChecked((b) => !b)}
                className={`${cs.customCheckbox} ${isChecked ? cs.customCheckboxChecked : ""}`}
                style={{ marginRight: "13px" }}
                tabIndex={0}
                role="checkbox"
                aria-checked={isChecked ? "true" : "false"}>
                <Check aria-hidden="true" />

                <input type="hidden" name="subscribe-checkbox" defaultValue="0" />

                <input
                  type="checkbox"
                  id="subscribe-checkbox"
                  name="subscribe-checkbox"
                  defaultValue="1"
                  checked={isChecked}
                  readOnly
                  hidden
                />
              </div>

              <label htmlFor="subscribe-checkbox" className={s.agreementText}>
                I agree to receive communications from Createx Store.
              </label>
            </div>
          </form>
        </div>

        {/* <!-- Right --> */}
        <div className={s.right}></div>
      </div>
    </section>
  );
};
