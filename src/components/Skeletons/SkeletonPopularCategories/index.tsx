import React from "react";

import s from "./SkeletonPopularCategories.module.scss";

export const SkeletonPopularCategories: React.FC = () => (
  <div className={s.slide}>
    <span className={`${s.box} ${s.skeleton}`}></span>
    <span className={`${s.name} ${s.skeleton}`}></span>
  </div>
);
