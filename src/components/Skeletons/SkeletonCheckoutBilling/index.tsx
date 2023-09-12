import React from "react";

import s from "./SkeletonCheckoutBilling.module.scss";

export const SkeletonCheckoutBilling: React.FC = () => (
  <>
    <div className={s.root}>
      {/*  Fields */}
      <div className={s.fields}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={s.field}>
            <span className={`${s.label} ${s.skeleton}`}></span>
            <span className={`${s.input} ${s.skeleton}`}></span>
          </div>
        ))}
      </div>
    </div>

    {/* Checking */}
    <div className={s.checking}>
      <span className={`${s.checkbox} ${s.skeleton}`}></span>
      <span className={`${s.checktext} ${s.skeleton}`}></span>
    </div>
  </>
);
