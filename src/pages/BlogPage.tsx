import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

import { Blog, Breadcrumbs, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

// const categories = ["clothes", "shoes", "accessories", "boys"];

export const BlogPage: React.FC = () => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // const [object, category] = location.pathname.split("/").filter((path) => path !== "");

  // React.useEffect(() => {
  //   if (!categories.includes(category)) navigate("404");
  // }, []);

  // if (!categories.includes(category)) return;

  return (
    <main>
      <h1 className={cs.srOnly}>Blog</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Blog />
    </main>
  );
};
