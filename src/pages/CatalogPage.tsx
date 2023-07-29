import React from "react";
import { useParams, useLocation, useMatch } from "react-router-dom";

import { Breadcrumbs, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

export const CatalogPage: React.FC = () => {
  // const prams = useParams();
  // const test = useLocation();
  // const test3 = useMatch(/d/);
  // console.log(test3);

  return (
    <main>
      <h1 className={cs.srOnly}>Catalog of products</h1>
      <SpecialOffers />
      <Breadcrumbs />
    </main>
  );
};
