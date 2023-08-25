import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useGetPostsQuery } from "../redux/backendApi";

import { Article, Breadcrumbs, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

export const SinglePostPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [_, postId] = location.pathname.split("/").filter((path) => path !== "");

  const { data, isError } = useGetPostsQuery(`?id=${postId}`);

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
      <Article post={apiResponse[0]} />
    </main>
  );
};
