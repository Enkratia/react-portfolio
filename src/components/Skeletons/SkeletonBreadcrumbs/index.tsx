import React from "react";

import s from "./SkeletonBreadcrumbs.module.scss";

export const SkeletonBreadcrumbs: React.FC = () => (
  <div className={`${s.title} ${s.skeleton}`}></div>
);
