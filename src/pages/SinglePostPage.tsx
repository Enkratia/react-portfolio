import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const [_, postId] = location.pathname.split("/").filter((path) => path !== "");

  const { data, isError } = useGetPostsQuery(`?id=${postId}&_limit=1`);

  if (isError) {
    navigate("404");
  }

  if (!data) return;
  const { apiResponse } = data;

  return (
    <main>
      <h1 className={cs.srOnly}>{`Post: ${apiResponse[0].title}`}</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Post post={apiResponse[0]} />
      <RelatedPosts category={apiResponse[0].category} />
      <Comments id={apiResponse[0].id} />
      <LeaveComment />
      <Subscribe />
    </main>
  );
};
