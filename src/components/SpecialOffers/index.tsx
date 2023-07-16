import React from "react";
import { Link } from "react-router-dom";

// Styles
import s from "./SpecialOffers.module.scss";
import cs from "../../scss/global/_index.module.scss";

import { AngleDown } from "../../iconComponents";

const specialOffers = [
  {
    url: "/",
    urlText: "Shop our latest sale styles",
    text: "Up to 70% Off.",
  },
  {
    url: "/",
    urlText: "Learn more",
    text: "Money back guarantee.",
  },
  {
    url: "/",
    urlText: "Contact 24/7",
    text: "Friendly customer support.",
  },
];

export const SpecialOffers: React.FC = () => {
  const [active, setActive] = React.useState(0);

  const onNextClick = () => {
    if (active === specialOffers.length - 1) {
      setActive(0);
      return;
    }

    setActive((n) => n + 1);
  };

  const onPrevClick = () => {
    if (active === 0) {
      setActive(specialOffers.length - 1);
      return;
    }

    setActive((n) => n - 1);
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Slider --> */}
        <div className={s.marketingSlider}>
          <div className={`${s.slide} ${active ? s.slideVisible1 : s.slideVisible2}`}>
            <span className={s.text}>{specialOffers[active].text}</span>

            <Link to={specialOffers[active].url} className={s.link}>
              {specialOffers[active].urlText}
            </Link>
          </div>

          {/* <!-- Navigation --> */}
          <div className={s.navigation}>
            <button
              onClick={onPrevClick}
              className={`${s.btn} ${s.btnLeft} ${cs.btnReset}`}
              aria-label="Move to the previous slide">
              <AngleDown aria-hidden="true" />
            </button>

            <button
              onClick={onNextClick}
              className={`${s.btn} ${s.btnRight} ${cs.btnReset}`}
              aria-label="Move to the next slide.">
              <AngleDown aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
