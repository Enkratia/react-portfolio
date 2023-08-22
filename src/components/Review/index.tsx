import React from "react";

import { ProductReviewType } from "../../redux/backendApi/types";

import { formatDate, setOverflowHidden } from "../../util/customFunctions";

import s from "./Review.module.scss";
import pr from "../../components/Product/Product.module.scss";
import { Dislike, Like, Reply, Star2 } from "../../iconComponents";

type ReviewProps = {
  review: ProductReviewType;
  isModalOpen: boolean;
  setRecipient: (s: string) => void;
  setIsModalOpen: () => void;
};

export const Review: React.FC<ReviewProps> = ({
  review,
  isModalOpen,
  setRecipient,
  setIsModalOpen,
}) => {
  const [assess, setAssess] = React.useState(0);

  // **
  const onAssessBtnClick = (assessClickResult: number) => {
    setAssess((assess) => {
      if (assess === assessClickResult) {
        return 0;
      } else {
        return assessClickResult;
      }
    });
  };

  //**
  const onReplyClick = () => {
    setRecipient(review.name);
    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  return (
    <div className={s.root}>
      <div className={s.user}>
        <span className={s.userName}>{review.name}</span>
        <span className={s.userDate}>{formatDate(review.date)}</span>

        <div className={s.userRate}>
          {review.rating > 0 && (
            <div
              className={`${s.userRating} ${pr.rating}`}
              aria-label={`Rating: ${review.rating} star(s) of 5`}>
              {[...Array(5)].map((_, i) => (
                <Star2
                  key={i}
                  aria-hidden="true"
                  className={`${pr.ratingIcon} ${review.rating > i ? pr.ratingIconActive : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={s.message}>
        <p className={s.messageText}>
          {review.recipient.length > 0 && (
            <span className={s.messageLink}>{`@${review.recipient}`}</span>
          )}
          {review.text}
        </p>

        <div className={s.messageTooltips}>
          <button onClick={onReplyClick} className={s.messageReply}>
            <Reply aria-hidden="true" />
            Reply
          </button>

          <div className={s.messageAssessment}>
            <button
              onClick={() => onAssessBtnClick(1)}
              className={`${s.messageBtn} ${s.messageBtnLike}`}
              aria-label="Like this review.">
              <Like aria-hidden="true" />
              {review.like + (assess > 0 ? assess : 0)}
            </button>

            <button
              onClick={() => onAssessBtnClick(-1)}
              className={`${s.messageBtn} ${s.messageBtnDislike}`}
              aria-label="Dislike this review.">
              <Dislike aria-hidden="true" />
              {review.dislike - (assess < 0 ? assess : 0)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
