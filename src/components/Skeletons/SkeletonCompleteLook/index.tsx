import React from "react";

import s from "./SkeletonCompleteLook.module.scss";

export const SkeletonCompleteLook: React.FC = () => (
  <div className={`${s.image} ${s.skeleton}`}></div>
);
