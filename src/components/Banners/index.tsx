import React from "react";
import { Link } from "react-router-dom";
import { useTimer } from "../../util/customHooks";

import s from "./Banners.module.scss";
import cs from "../../scss/global/_index.module.scss";
import { Arrow } from "../../iconComponents";

const banners = [
  {
    id: 0,
    title: "Sale Up to 70%",
    subtitle: "Summer Collections",
    linkUrl: "/",
    btnText: "Explore new prices",
    date: "",
  },
  {
    id: 1,
    title: "Stay Warm With Our New Sweaters",
    subtitle: "Deal of the week",
    linkUrl: "/",
    btnText: "Shop now",
    date: "2023-12-31T23:59:59",
  },
  {
    id: 2,
    title: "Shoes &\u00A0Bags autumn\u00A0/ winter 2020",
    subtitle: "New collection",
    linkUrl: "/",
    btnText: "See offers",
    date: "",
  },
];
const timeParts = ["Days", "Hours", "Mins", "Sec"];

type TimerType = {
  date: string;
};

const Timer: React.FC<TimerType> = ({ date }) => {
  const { time, updateDate } = useTimer();
  console.log(time);

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

        {/* <div className={s.timerBox}>
          <span className={s.timerCount}>06</span>
          <span className={s.timerText}>Days</span>
        </div>

        <div className={s.timerBox}>
          <span className={s.timerCount}>18</span>
          <span className={s.timerText}>Hours</span>
        </div>

        <div className={s.timerBox}>
          <span className={s.timerCount}>24</span>
          <span className={s.timerText}>Mins</span>
        </div>

        <div className={s.timerBox}>
          <span className={s.timerCount}>12</span>
          <span className={s.timerText}>Sec</span>
        </div> */}
      </div>
    </>
  );
};

export const Banners: React.FC = () => {
  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Informational banners</h2>

      <div className={`${s.container} ${cs.containerWide}`}>
        {/* Banners 1 - 3 */}
        {banners.map((banner, i) => (
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
        {/* <div className={`${s.banner} ${s.banner1}`}>
          <span className={s.subtitle}>Summer Collections</span>

          <p className={s.title}>Sale Up to 70%</p>

          <Link to={"/"} className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            Explore new prices
          </Link>
        </div>

        <div className={`${s.banner} ${s.banner2}`}>
          <span className={s.subtitle}>Deal of the week</span>

          <p className={s.title}>Stay Warm With Our New Sweaters</p>

          <Link to={"/"} className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            Shop now
          </Link>

          <span className={s.subtitle}>Limited time offer</span>

          <div className={s.timer}>
            <div className={s.timerBox}>
              <span className={s.timerCount}>06</span>
              <span className={s.timerText}>Days</span>
            </div>

            <div className={s.timerBox}>
              <span className={s.timerCount}>18</span>
              <span className={s.timerText}>Hours</span>
            </div>

            <div className={s.timerBox}>
              <span className={s.timerCount}>24</span>
              <span className={s.timerText}>Mins</span>
            </div>

            <div className={s.timerBox}>
              <span className={s.timerCount}>12</span>
              <span className={s.timerText}>Sec</span>
            </div>
          </div>
        </div>

        <div className={`${s.banner} ${s.banner3}`}>
          <span className={s.subtitle}>New collection</span>

          <p className={s.title}>Shoes &amp;&nbsp;Bags autumn&nbsp;/ winter 2020</p>

          <Link to={"/"} className={`${s.button} ${cs.btn} ${cs.btnMid} ${cs.btnOutline}`}>
            See offers
            <Arrow aria-hidden="true" />
          </Link>
        </div> */}

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
