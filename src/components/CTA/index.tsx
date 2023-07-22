import React from "react";

import s from "./CTA.module.scss";
import cs from "../../scss/global/_index.module.scss";

export const CTA: React.FC = () => {
  return (
    <section className={s.root}>
      <h2 className={cs.srOnly}>Our mobile apps in app store and google play</h2>

      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <div className={s.image} aria-hidden="true"></div>

        <div className={s.content}>
          <p className={s.title}>Enjoy mobile shopping with our Createx Store App!</p>

          <div className={s.btns}>
            <a
              href="#"
              target="_blank"
              className={`${s.btn} ${cs.btnApp} ${cs.btnAppApple}`}
              aria-label="Go to the our App Store mobile application.">
              <span className={cs.btnAppSubtitle}>Download on the</span>
              <span className={cs.btnAppTitle}>App Store</span>
            </a>

            <a
              href="#"
              target="_blank"
              className={`${s.btn} ${cs.btnApp} ${cs.btnAppGoogle}`}
              aria-label="Go to the our Google Play mobile application.">
              <span className={`${cs.btnAppSubtitle} ${cs.btnAppSubtitleGoogle}`}>Get it on</span>
              <span className={`${cs.btnAppTitle} ${cs.btnAppTitleGoogle}`}>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
