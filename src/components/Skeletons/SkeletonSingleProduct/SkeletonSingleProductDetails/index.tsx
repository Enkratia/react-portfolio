import React from "react";

import s from "./SkeletonSingleProductDetails.module.scss";
import { SkeletonProduct } from "../../../Skeletons";

export const SkeletonSingleProductDetails: React.FC = () => (
  <div className={s.details}>
    {/* <!-- Left --> */}
    <div className={s.detailsLeft}>
      {/* <!-- Section1 --> */}
      <section className={s.detailsSection}>
        <span className={`${s.detailsTitle} ${s.skeleton}`}></span>

        <div>
          <span className={`${s.detailsDescr} ${s.skeleton}`}></span>
          <span className={`${s.detailsDescr} ${s.skeleton}`}></span>
        </div>

        <div className={s.detailsList}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`${s.detailsItem} ${s.skeleton}`}></span>
          ))}
        </div>
      </section>

      {/* <!-- Section2 --> */}
      <section className={s.detailsSection}>
        <span className={`${s.detailsTitle} ${s.skeleton}`}></span>

        <div className={s.detailsList}>
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`${s.detailsItem} ${s.skeleton}`}></span>
          ))}
        </div>
      </section>

      {/* <!-- Section3 --> */}
      <section className={s.detailsSection}>
        <span className={`${s.detailsTitle} ${s.skeleton}`}></span>

        <div className={s.detailsList}>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={`${s.detailsItem} ${s.detailsItemCare} ${s.skeleton}`}></span>
          ))}
        </div>
      </section>
    </div>

    {/* <!-- Right --> */}
    <div className={s.detailsRight}>
      <SkeletonProduct />
    </div>
  </div>
);
