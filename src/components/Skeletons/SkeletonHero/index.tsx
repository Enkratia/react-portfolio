import React from "react";

import s from "./SkeletonHero.module.scss";
import cs from "../../../scss/global/_index.module.scss";

export const SkeletonHero: React.FC = () => (
  <section className={s.root}>
    <div className={s.container}>
      <div className={s.slide}>
        <div className={`${s.content} ${cs.container} ${cs.container40}`}>
          <span className={`${s.subtitle} ${s.skeleton}`}></span>

          <span className={`${s.title} ${s.skeleton}`}></span>

          <div className={s.btns}>
            <span className={`${s.button} ${s.skeleton}`}></span>
            <span className={`${s.button} ${s.skeleton}`}></span>
          </div>
        </div>
      </div>

      {/* <!-- Pagination --> */}
      <div className={s.paginationWrapper}>
        <div className={`${s.pagination} ${cs.container} ${cs.container40}`}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={`${s.paginationBullet} ${s.skeleton}`}></span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
