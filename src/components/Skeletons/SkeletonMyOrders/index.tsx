import React from "react";

import s from "./SkeletonMyOrders.module.scss";

export const SkeletonMyOrders: React.FC = () => (
  <div className={s.order}>
    <div className={s.head}>
      <span className={`${s.vendor} ${s.skeleton}`}></span>
      <span className={`${s.time} ${s.skeleton}`}></span>
      <span className={`${s.state} ${s.skeleton}`}></span>
      <span className={`${s.pay} ${s.skeleton}`}></span>
      <span className={`${s.toggle} ${s.skeleton}`}></span>
    </div>
  </div>
);
