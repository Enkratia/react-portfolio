import React from "react";
import { Link } from "react-router-dom";
import { useTimer } from "../../util/customHooks";
import { useGetBannersQuery } from "../../redux/backendApi";

import s from "./Banners.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Arrow } from "../../iconComponents";

const timeParts = ["Days", "Hours", "Mins", "Sec"];

type TimerType = {
  date: string;
};

const Timer: React.FC<TimerType> = ({ date }) => {
  const { time, updateDate } = useTimer();

  React.useEffect(() => {
    updateDate(date);
  }, []);

  return (
    <>
      <span className={s.subtitle}>Limited time offer</span>

      <div className={s.timer}>
        {timeParts.map((timePart, i) => (
          <div key={i} className={s.timerBox}>
            <span className={s.timerCount}>{time[timePart.toLowerCase()]}</span>
            <span className={s.timerText}>{timePart}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export const Banners: React.FC = () => {
  const { data } = useGetBannersQuery();
  if (!data) return;

  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Informational banners</h2>

      <div className={`${s.container} ${cs.containerWide}`}>
        {/* Banners 1 - 3 */}
        {data.map((banner, i) => (
          <div key={i} className={`${s.banner} ${s[`banner${i + 1}`]}`}>
            <span className={s.subtitle}>{banner.subtitle}</span>

            <p className={s.title}>{banner.title}</p>

            <Link
              to={banner.linkUrl}
              className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
              {banner.btnText}
              {i === 2 && <Arrow aria-hidden="true" />}
            </Link>

            {i === 1 && <Timer date={banner.date} />}
          </div>
        ))}

        {/* <!-- Banner 4 --> */}
        <div className={`${s.banner} ${s.banner4}`}>
          <span className={s.subtitle}>For All new Email Subscribers</span>

          <p className={s.title}>Get&nbsp;5% Off &amp;&nbsp;Free Delivery</p>

          <form className={s.form}>
            <label htmlFor="banners-form-input" className={s.formLabel}>
              Email
            </label>

            <div className={s.formField}>
              <input
                type="email"
                className={`${s.formInput} ${cs.input}`}
                id="banners-form-input"
                name="banners-form-input"
                placeholder="Your working email"
              />

              <button
                className={`${s.button} ${s.formButton} ${cs.btn} ${cs.btnMid} ${cs.btnReset}`}>
                Subscribe
              </button>
            </div>
          </form>

          <p className={s.details}>
            *Sign up to be the first to hear about exclusive deals, special offers and upcoming
            collections.
          </p>
        </div>
      </div>
    </section>
  );
};
