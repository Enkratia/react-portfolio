import React from "react";

import s from "./SkeletonReview.module.scss";

type SkeletonReviewProps = {
  isShowFor?: boolean;
  isShowReply?: boolean;
};

export const SkeletonReview: React.FC<SkeletonReviewProps> = ({
  isShowFor = false,
  isShowReply = true,
}) => (
  <div className={s.root}>
    {isShowFor && (
      <div className={s.for}>
        <span className={`${s.forLabel} ${s.skeleton}`}></span>
        <span className={`${s.forLink} ${s.skeleton}`}></span>
      </div>
    )}

    <div className={s.user}>
      <span className={`${s.userName} ${s.skeleton}`}></span>
      <span className={`${s.userDate} ${s.skeleton}`}></span>

      <div className={s.userRate}>
        <div className={s.userRating}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`${s.userRatingIcon} ${s.skeleton}`}></span>
          ))}
        </div>
      </div>
    </div>

    <div className={s.message}>
      <div className={s.messageTexts}>
        <span className={`${s.messageText} ${s.skeleton}`}></span>
        <span className={`${s.messageText} ${s.skeleton}`}></span>
        <span className={`${s.messageText} ${s.skeleton}`}></span>
      </div>

      <div className={s.messageTooltips}>
        {isShowReply && <span className={`${s.messageReply} ${s.skeleton}`}></span>}

        <div className={s.messageAssessment}>
          <span className={`${s.messageBtn} ${s.skeleton}`}></span>
          <span className={`${s.messageBtn} ${s.skeleton}`}></span>
        </div>
      </div>
    </div>
  </div>
);
