import React from "react";

import s from "./SkeletonMyProfile.module.scss";

export const SkeletonMyProfile: React.FC = () => (
  <div className={s.root}>
    <div className={s.fields}>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={s.field}>
          <span className={`${s.label} ${s.skeleton}`}></span>
          <span className={`${s.input} ${s.skeleton}`}></span>
        </div>
      ))}
    </div>
    <span className={`${s.button} ${s.skeleton}`}></span>
  </div>
);
