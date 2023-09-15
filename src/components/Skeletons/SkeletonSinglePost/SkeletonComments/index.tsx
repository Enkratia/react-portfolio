import React from "react";

import s from "./SkeletonComments.module.scss";

export const SkeletonCommentsTitle: React.FC = () => (
  <div className={`${s.title} ${s.skeleton}`}></div>
);
