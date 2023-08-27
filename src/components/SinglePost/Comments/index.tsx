import React from "react";

import { useGetPostsCommentsQuery } from "../../../redux/backendApi";

import { Comment } from "../../../components";

import s from "./Comments.module.scss";
import cs from "../../../scss/global/_index.module.scss";

type CommentsProps = {
  id: number;
};

const defaultLimit = 4;

export const Comments: React.FC<CommentsProps> = ({ id }) => {
  const { data, isError } = useGetPostsCommentsQuery(`?postId_like=${id}&_limit=${defaultLimit}`);

  if (!data || isError) return;
  const { apiResponse: comments, totalCount } = data;

  if (totalCount === 0) return;

  const formatTitle = () => {
    return totalCount === 1 ? "1 comment" : `${totalCount} comments`;
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.containerNarrow}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>{formatTitle()}</h2>

        <ul className={s.list}>
          {comments.map((comment, i) => (
            <li key={i} className={s.item}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
