import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";

import { PostType } from "../../redux/backendApi/types";

import { formatDate } from "../../util/customFunctions";

import s from "./PostPreview.module.scss";
import { Comments } from "../../iconComponents";

type PostPreviewProps = {
  post: PostType;
  isBlog?: boolean;
};

export const PostPreview: React.FC<PostPreviewProps> = ({ post, isBlog = false }) => {
  const amendComments = (array: string[]) => {
    if (array.length === 0) {
      return "No comments";
    }

    if (array.length === 1) {
      return "1 comment";
    }

    return array.length + " comments";
  };

  const formatText = () => {
    const regExp = /(\<[^>|<]*\>)/gi;

    const plainText = post.text.replace(regExp, "");
    return plainText.substring(0, 250);
  };

  return (
    <article className={s.root}>
      <div className={`${s.box} ${isBlog ? s.boxBlog : ""}`}>
        <Link className={s.imageLink} to={`/fashion-blog/${post.id}`}>
          <img src={post.imageUrl} alt="Post image." className={s.image} />
        </Link>
      </div>

      <div className={`${s.text} ${isBlog ? s.textBlog : ""}`}>
        <p className={`${s.title} ${isBlog ? s.titleBlog : ""}`}>
          <Link to={`/fashion-blog/${post.id}`} className={s.link}>
            {post.title}
          </Link>
        </p>

        <ul className={`${s.data} ${isBlog ? s.dataBlog : ""}`}>
          <li className={s.item}>
            <Link
              to={`/fashion-blog?category=${post.category}`}
              state="post-preview-category-link"
              className={s.info}>
              {post.category}
            </Link>
          </li>

          <li className={s.item}>
            <span className={s.info}>{formatDate(post.date)}</span>
          </li>

          <li className={s.item}>
            <span className={s.info}>
              <Comments aria-hidden="true" />
              <span className={s.info}>{amendComments(post.comments)}</span>
            </span>
          </li>
        </ul>

        <p className={s.firstLines}>{formatText()}</p>
      </div>
      <ScrollRestoration />
    </article>
  );
};
