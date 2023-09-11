import React from "react";

import s from "./SkeletonProduct.module.scss";

export const SkeletonProduct: React.FC = () => (
  <div className={s.root}>
    <span className={`${s.look} ${s.skeleton}`}></span>
    <span className={`${s.name} ${s.skeleton}`}></span>
    <span className={`${s.price} ${s.skeleton}`}></span>
  </div>
);
