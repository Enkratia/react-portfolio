import React from "react";

import { useGetPostsCommentsQuery } from "../../../redux/backendApi";

import { Comment, SkeletonComment, SkeletonCommentsTitle } from "../../../components";

import s from "./Comments.module.scss";
import cs from "../../../scss/global/_index.module.scss";

type CommentsProps = {
  id: string;
};

const defaultLimit = 4;

export const Comments: React.FC<CommentsProps> = ({ id }) => {
  const { data, isError } = useGetPostsCommentsQuery(`?postId_like=${id}&_limit=${defaultLimit}`);

  if (isError) {
    console.log("Failed to load comments");
    alert("Failed to load comments");
  }

  const comments = data?.apiResponse;
  const totalCount = data?.totalCount;

  if (totalCount === 0) return;

  const formatTitle = () => {
    return totalCount === 1 ? "1 comment" : `${totalCount} comments`;
  };

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.containerNarrow}`}>
        <h2 className={`${s.title} ${cs.sectionTitle}`}>
          {!comments ? <SkeletonCommentsTitle /> : formatTitle()}
        </h2>

        <ul className={s.list}>
          {!comments
            ? [...Array(4)].map((_, i) => <SkeletonComment key={i} />)
            : comments.map((comment, i) => (
                <li key={i} className={s.item}>
                  <Comment comment={comment} />
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
};
