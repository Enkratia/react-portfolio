import React from "react";

import s from "./SkeletonContactsAccordion.module.scss";

export const SkeletonContactsAccordion: React.FC = () => (
  <div className={s.accordionItem}>
    <div className={s.accordionHead}>
      <span className={`${s.accordionTitle} ${s.skeleton}`}></span>
      <span className={`${s.accordionToggle} ${s.skeleton}`}></span>
    </div>
  </div>
);
