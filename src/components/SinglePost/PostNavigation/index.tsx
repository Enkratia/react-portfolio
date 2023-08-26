import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { PostType } from "../../../redux/backendApi/types";
import { useGetPostsQuery } from "../../../redux/backendApi";
import { formatDate } from "../../../util/customFunctions";

import s from "./PostNavigation.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Arrow, Clock } from "../../../iconComponents";

type PostNavigationType = {
  post: PostType;
};

let prevId: number;
let nextId: number;

export const PostNavigation: React.FC<PostNavigationType> = ({ post }) => {
  const navigate = useNavigate();
  const { data: dataAll, isError: isError1 } = useGetPostsQuery(`?_limit=0`); // узнать количество постов

  if (dataAll) {
    const { totalCount } = dataAll;
    prevId = post.id === 0 ? totalCount - 1 : post.id - 1;
    nextId = post.id === totalCount - 1 ? 0 : post.id + 1;
  }

  const { data: dataPrevNext, isError: isError2 } = useGetPostsQuery(`?id=${prevId}&id=${nextId}`, {
    skip: prevId === undefined || nextId === undefined,
  });

  if (isError1 || isError2) {
    console.warn("Ошибка");
  }

  if (!dataPrevNext) return;
  const { apiResponse } = dataPrevNext;
  let [postPrev, postNext] = apiResponse;

  if (post.id === 0 || nextId === 0) {
    [postPrev, postNext] = [postNext, postPrev];
  }

  // **
  const onPrevPostClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`/fashion-blog/${prevId}`);
  };

  const onNextPostClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(`/fashion-blog/${nextId}`);
  };

  return (
    <div className={`${s.root} ${cs.container} ${cs.containerNarrow}`}>
      {/* <!-- Prev --> */}
      <Link onClick={onPrevPostClick} to={postPrev.linkUrl} className={s.link}>
        <p className={s.title}>
          <Arrow aria-hidden="true" />
          <span className={s.titleText}>Prev Post</span>
        </p>

        <div className={s.box}>
          <div className={s.imageWrapper}>
            <img src={postPrev.imageUrl} alt="Post image." className={s.image} />
          </div>

          <div className={s.info}>
            <span className={s.date}>
              <Clock aria-hidden="true" />
              {formatDate(postPrev.date)}
            </span>

            <p className={s.name}>{postPrev.title}</p>
          </div>
        </div>
      </Link>

      {/* <!-- Next --> */}
      <Link onClick={onNextPostClick} to={postNext.linkUrl} className={s.link}>
        <p className={s.title}>
          <span className={s.titleText}>Next Post</span>
          <Arrow aria-hidden="true" />
        </p>

        <div className={s.box}>
          <div className={s.info}>
            <span className={s.date}>
              <Clock aria-hidden="true" />
              {formatDate(postNext.date)}
            </span>

            <p className={s.name}>{postNext.title}</p>
          </div>

          <div className={s.imageWrapper}>
            <img src={postNext.imageUrl} alt="Post image." className={s.image} />
          </div>
        </div>
      </Link>
    </div>
  );
};
