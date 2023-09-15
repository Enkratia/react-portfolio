import React from "react";

import s from "./SkeletonPostNavigation.module.scss";
import cs from "../../../../scss/global/_index.module.scss";

export const SkeletonPostNavigation: React.FC = () => (
  <div className={`${s.root} ${cs.container} ${cs.containerNarrow}`}>
    <div className={s.link}>
      <div className={s.title}>
        <span className={`${s.titleArrow} ${s.skeleton}`}></span>
        <span className={`${s.titleText} ${s.skeleton}`}></span>
      </div>

      <div className={s.box}>
        <div className={`${s.imageWrapper} ${s.skeleton}`}></div>

        <div className={s.info}>
          <span className={`${s.date} ${s.skeleton}`}></span>
          <span className={`${s.name} ${s.skeleton}`}></span>
        </div>
      </div>
    </div>

    <div className={s.link}>
      <div className={s.title}>
        <span className={`${s.titleText} ${s.skeleton}`}></span>
        <span className={`${s.titleArrow} ${s.skeleton}`}></span>
      </div>

      <div className={s.box}>
        <div className={s.info}>
          <span className={`${s.date} ${s.skeleton}`}></span>
          <span className={`${s.name} ${s.skeleton}`}></span>
        </div>

        <div className={`${s.imageWrapper} ${s.skeleton}`}></div>
      </div>
    </div>
  </div>
);
