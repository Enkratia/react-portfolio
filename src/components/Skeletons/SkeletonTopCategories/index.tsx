import React from "react";

import s from "./SkeletonTopCategories.module.scss";

export const SkeletonTopCategories: React.FC = () => {
  return (
    <div className={`${s.category}`}>
      <div className={`${s.wrap}`}>
        <div className={`${s.box} ${s.skeleton}`}></div>

        <span className={`${s.link} ${s.skeleton}`}></span>
      </div>
    </div>
  );
};
