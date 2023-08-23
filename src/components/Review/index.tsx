import React from "react";
import { Link } from "react-router-dom";

import { ProductReviewType } from "../../redux/backendApi/types";

import { formatDate, setOverflowHidden } from "../../util/customFunctions";

import s from "./Review.module.scss";
import pr from "../../components/Product/Product.module.scss";
import { Dislike, Like, Reply, Star2 } from "../../iconComponents";

type ReviewProps = {
  review: ProductReviewType;
  isModalOpen?: boolean;
  setRecipient?: (s: string) => void;
  setIsModalOpen?: () => void;
  isShowReply?: boolean;
  isShowRecipient?: boolean;
  isShowFor?: boolean;
};

export const Review: React.FC<ReviewProps> = ({
  review,
  isModalOpen,
  setRecipient,
  setIsModalOpen,
  isShowReply = true,
  isShowRecipient = true,
  isShowFor = false,
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
    if (!setRecipient || !setIsModalOpen) return;

    setRecipient(review.name);
    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  return (
    <div className={s.root}>
      {isShowFor && (
        <div className={s.for}>
          <label htmlFor="" className={s.forLabel}>
            For:
          </label>

          <Link to={review.productLink} className={s.forLink}>
            {review.title}
          </Link>
        </div>
      )}

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
          {review.recipient.length > 0 && isShowRecipient && (
            <span className={s.messageLink}>{`@${review.recipient}`}</span>
          )}
          {review.text}
        </p>

        <div className={s.messageTooltips}>
          {isShowReply && (
            <button onClick={onReplyClick} className={s.messageReply}>
              <Reply aria-hidden="true" />
              Reply
            </button>
          )}

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
