import React from "react";

import s from "./SkeletonPostPreview.module.scss";

type SkeletonPostPreviewProps = {
  isBlog?: boolean;
};

export const SkeletonPostPreview: React.FC<SkeletonPostPreviewProps> = ({ isBlog = false }) => (
  <div className={`${s.root} ${isBlog ? s.rootBlog : ""}`}>
    <div className={`${s.box} ${isBlog ? s.boxBlog : ""} ${s.skeleton}`}></div>

    <div className={`${s.text} ${isBlog ? s.textBlog : ""}`}>
      <span className={`${s.title} ${isBlog ? s.titleBlog : ""} ${s.skeleton}`}></span>

      <div className={`${s.data} ${isBlog ? s.dataBlog : ""}`}>
        {[...Array(3)].map((_, i) => (
          <span key={i} className={`${s.dataItem} ${s.skeleton}`}></span>
        ))}
      </div>

      <div>
        <span className={`${s.firstLines} ${s.skeleton}`}></span>
        <span className={`${s.firstLines} ${s.skeleton}`}></span>
      </div>
    </div>
  </div>
);
