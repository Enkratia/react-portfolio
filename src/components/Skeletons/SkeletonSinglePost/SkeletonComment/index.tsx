import React from "react";

import rev from "../../SkeletonReview/SkeletonReview.module.scss";

export const SkeletonComment: React.FC = () => (
  <div className={rev.root}>
    <div className={rev.user}>
      <span className={`${rev.userName} ${rev.skeleton}`}></span>
      <span className={`${rev.userDate} ${rev.skeleton}`}></span>
    </div>

    <div className={rev.message}>
      <div>
        {[...Array(3)].map((_, i) => (
          <span key={i} className={`${rev.messageText} ${rev.skeleton}`}></span>
        ))}
      </div>

      <div className={rev.messageTooltips}>
        <span className={`${rev.messageReply} ${rev.skeleton}`}></span>
      </div>
    </div>
  </div>
);
