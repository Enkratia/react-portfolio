import React from "react";

import s from "./SkeletonSingleProductTitle.module.scss";

export const SkeletonSingleProductTitle: React.FC = () => (
  <div className={`${s.title} ${s.skeleton}`}></div>
);
export const SkeletonSingleProductNumber: React.FC = () => (
  <div className={`${s.number} ${s.skeleton}`}></div>
);
