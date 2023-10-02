import React from "react";

import { Blog, Breadcrumbs, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

export const BlogPage: React.FC = () => {
  return (
    <main>
      <h1 className={cs.srOnly}>Blog</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Blog />
    </main>
  );
};
