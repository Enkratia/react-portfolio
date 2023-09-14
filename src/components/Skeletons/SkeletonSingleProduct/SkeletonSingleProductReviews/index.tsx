import React from "react";

import s from "./SkeletonSingleProductReviews.module.scss";
import { SkeletonProduct, SkeletonReview } from "../../../Skeletons";

export const SkeletonSingleProductReviews: React.FC = () => (
  <div className={s.root}>
    {/* <!-- Left --> */}
    <div className={s.left}>
      {/* <!-- Info --> */}
      <div className={s.info}>
        {/* <!-- Rate --> */}
        <div className={s.infoRate}>
          <span className={`${s.infoTitle} ${s.skeleton}`}></span>

          <div className={s.infoRating}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`${s.infoRatingIcon} ${s.skeleton}`}></span>
            ))}
          </div>

          <div>
            <span className={`${s.infoRecommended} ${s.skeleton}`}></span>
            <span className={`${s.infoRecommended} ${s.skeleton}`}></span>
          </div>
        </div>

        {/* <!-- Progress --> */}
        <div className={s.infoProgress}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={s.infoProgressItem}>
              <span className={`${s.infoProgressGrade} ${s.skeleton}`}></span>
              <span className={`${s.infoProgressBar} ${s.skeleton}`}></span>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- Tool-bar --> */}
      <div className={s.toolbar}>
        <span className={`${s.toolbarBtn} ${s.skeleton}`}></span>

        <div className={s.toolbarSort}>
          <span className={`${s.toolbarTitle} ${s.skeleton}`}></span>
          <span className={`${s.toolbarSelect} ${s.skeleton}`}></span>
        </div>
      </div>

      {/* <!-- Review --> */}
      <div className={s.review}>
        {[...Array(3)].map((_, i) => (
          <SkeletonReview key={i} />
        ))}
      </div>
    </div>

    {/* <!-- Right --> */}
    <div className={s.right}>
      <SkeletonProduct />
    </div>
  </div>
);
