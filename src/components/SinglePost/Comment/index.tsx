import React from "react";

import { PostsCommentType } from "../../../redux/backendApi/types";
import { setRecipient } from "../../../redux/leaveCommentSlice/slice";
import { useAppDispatch } from "../../../redux/store";

import { formatDate } from "../../../util/customFunctions";

import rev from "../../../components/Review/Review.module.scss";
import { Reply } from "../../../iconComponents";

type CommentProps = {
  comment: PostsCommentType;
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const dispatch = useAppDispatch();

  const onReplyClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setRecipient(comment.name));

    const commentForm = e.currentTarget.closest("section")?.nextElementSibling;
    const commentFormTop = commentForm?.getBoundingClientRect().top;

    if (commentFormTop) {
      window.scrollBy(0, commentFormTop - 100);
    }
  };

  return (
    <div className={rev.root}>
      <div className={rev.user}>
        <span className={rev.userName}>{comment.name}</span>
        <span className={`${rev.userDate} ${rev.userDateComment}`}>{formatDate(comment.date)}</span>
      </div>

      <div className={rev.message}>
        <p className={rev.messageText}>
          {comment.recipient.length > 0 && (
            <span className={rev.messageLink}>{`@${comment.recipient}`}</span>
          )}
          {comment.text}
        </p>

        <div className={rev.messageTooltips}>
          {
            <button onClick={onReplyClick} className={rev.messageReply}>
              <Reply aria-hidden="true" />
              Reply
            </button>
          }
        </div>
      </div>
    </div>
  );
};
