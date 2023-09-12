import React from "react";

import s from "./SkeletonHeaderMegamenu.module.scss";

export const SkeletonHeaderMegamenuOffer: React.FC = () => {
  return (
    <div className={s.offer}>
      <span className={`${s.offerImage} ${s.skeleton}`}></span>
      <span className={`${s.offerDescr} ${s.skeleton}`}></span>
      <span className={`${s.offerBtn} ${s.skeleton}`}></span>
    </div>
  );
};

export const SkeletonHeaderMegamenuList: React.FC = () => {
  return (
    <div className={s.list}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={s.item}>
          <span className={`${s.link} ${s.skeleton}`}></span>
        </div>
      ))}
    </div>
  );
};
