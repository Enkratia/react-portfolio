import React from "react";

import s from "./SkeletonCheckoutShipping.module.scss";

export const SkeletonCheckoutShipping: React.FC = () => (
  <div className={s.root}>
    {[...Array(5)].map((_, i) => (
      <div key={i} className={s.box}>
        <span className={`${s.radio} ${s.skeleton}`}></span>

        <div className={s.label}>
          <div className={s.info}>
            <span className={`${s.destination} ${s.skeleton}`}></span>
            <span className={`${s.date} ${s.skeleton}`}></span>
          </div>

          <span className={`${s.price} ${s.skeleton}`}></span>
        </div>
      </div>
    ))}
  </div>
);
