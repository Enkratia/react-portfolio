import React from "react";

import { ProductReviewType } from "../../redux/backendApi/types";

import { setOverflowHidden } from "../../util/customFunctions";

import s from "./Review.module.scss";
import pr from "../../components/Product/Product.module.scss";
import { Dislike, Like, Reply, Star2 } from "../../iconComponents";

type ReviewProps = {
  review: ProductReviewType;
  isModalOpen: boolean;
  setRecipient: (s: string) => void;
  setIsModalOpen: () => void;
};

type TimeOptionsType = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

const timeOptions: TimeOptionsType = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const Review: React.FC<ReviewProps> = ({
  review,
  isModalOpen,
  setRecipient,
  setIsModalOpen,
}) => {
  const onReplyClick = () => {
    setRecipient(review.name);
    setIsModalOpen();
    setOverflowHidden(!isModalOpen);
  };

  const formatDate = (date: string) => {
    const dateNow = Date.now();
    const dateThen = Date.parse(date);

    const dateDiff = dateNow - dateThen;

    if (dateDiff < 1000 * 60 * 60 * 24 * 4) {
      const daysCount = ~~(dateDiff / 1000 / 60 / 60 / 24);
      return ~~daysCount + (daysCount === 1 ? " day ago" : " days ago");
    }

    return new Intl.DateTimeFormat("en-US", timeOptions).format(dateThen);
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
              className={`${s.messageBtn} ${s.messageBtnLike}`}
              aria-label="Like this review.">
              <Like aria-hidden="true" />
              {review.like}
            </button>

            <button
              className={`${s.messageBtn} ${s.messageBtnDislike}`}
              aria-label="Dislike this review.">
              <Dislike aria-hidden="true" />
              {review.dislike}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
