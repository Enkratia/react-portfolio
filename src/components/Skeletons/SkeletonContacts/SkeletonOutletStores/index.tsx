import React from "react";

import s from "./SkeletonOutletStores.module.scss";

export const SkeletonOutletStores: React.FC = () => (
  <div className={s.root}>
    <div className={s.list}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={s.item}>
          <span className={`${s.image} ${s.skeleton}`}></span>

          <div className={s.text}>
            <div className={`${s.title} ${s.skeleton}`}></div>

            <div className={s.info}>
              {[...Array(4)].map((_, j) => (
                <div key={j} className={s.infoItem}>
                  <span className={`${s.infoIcon} ${s.skeleton}`}></span>
                  <span className={`${s.infoLink} ${s.skeleton}`}></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
