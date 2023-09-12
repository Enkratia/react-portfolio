import React from "react";

import s from "./SkeletonPostPreview.module.scss";

type SkeletonPostPreviewProps = {
  isBlog?: boolean;
};

export const SkeletonPostPreview: React.FC<SkeletonPostPreviewProps> = ({ isBlog = false }) => (
  <div className={s.root}>
    <div className={`${s.box} ${isBlog ? s.boxBlog : ""} ${s.skeleton}`}></div>

    <div className={`${s.text} ${isBlog ? s.textBlog : ""}`}>
      <span className={`${s.title} ${isBlog ? s.titleBlog : ""} ${s.skeleton}`}></span>
      <span className={`${s.data} ${isBlog ? s.dataBlog : ""} ${s.skeleton}`}></span>
      <span className={`${s.firstLines} ${s.skeleton}`}></span>
    </div>
  </div>
);
