import React from "react";
import { useLocation } from "react-router-dom";

import { useGetPostsQuery } from "../redux/backendApi";

import {
  Comments,
  Post,
  Breadcrumbs,
  SpecialOffers,
  RelatedPosts,
  LeaveComment,
  Subscribe,
} from "../components";

import cs from "../scss/global/_index.module.scss";

export const SinglePostPage: React.FC = () => {
  const location = useLocation();

  const [_, postId] = location.pathname.split("/").filter((path) => path !== "");

  const { data, isError } = useGetPostsQuery(`?id=${postId}&_limit=1`);

  if (isError) {
    console.warn("Faled to load post");
    alert("Failed to load post");
  }

  const post = data?.apiResponse?.[0];

  return (
    <main>
      <h1 className={cs.srOnly}>{`Post: ${post?.title}`}</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Post post={post} />
      <RelatedPosts category={post?.category} />
      <Comments id={postId} />
      <LeaveComment />
      <Subscribe />
    </main>
  );
};
