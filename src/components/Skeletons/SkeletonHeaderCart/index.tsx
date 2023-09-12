import React from "react";

import s from "./SkeletonHeaderCart.module.scss";

export const SkeletonHeaderCartCount: React.FC = () => (
  <div className={`${s.Count} ${s.skeleton}`}></div>
);

export const SkeletonHeaderCartProduct: React.FC = () => (
  <div className={s.item}>
    <div className={s.itemProduct}>
      <span className={`${s.itemBox} ${s.skeleton}`}></span>

      <div className={s.itemText}>
        <span className={`${s.itemTitle} ${s.skeleton}`}></span>
        <span className={`${s.itemColor} ${s.skeleton}`}></span>
        <span className={`${s.itemSize} ${s.skeleton}`}></span>
      </div>

      <span className={`${s.itemInputNum} ${s.skeleton}`}></span>
      <span className={`${s.itemPrices} ${s.skeleton}`}></span>
      <span className={`${s.itemDelete} ${s.skeleton}`}></span>
      <span className={`${s.itemFavorite} ${s.skeleton}`}></span>
    </div>
  </div>
);
