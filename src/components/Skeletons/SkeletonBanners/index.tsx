import React from "react";

import s from "./SkeletonBanners.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const SkeletonBanners: React.FC = () => (
  <section className={s.root}>
    <div className={`${s.container} ${cs.containerWide}`}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`${s.banner}`}>
          <span className={`${s.subtitle} ${s.skeleton}`}></span>
          <span className={`${s.title} ${s.skeleton}`}></span>
          <span className={`${s.button} ${s.skeleton}`}></span>

          {i === 1 && <div className={`${s.timer} ${s.skeleton}`}></div>}
          {i === 3 && <div className={`${s.form} ${s.skeleton}`}></div>}
        </div>
      ))}
    </div>
  </section>
);
