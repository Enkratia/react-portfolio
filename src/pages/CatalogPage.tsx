import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Breadcrumbs, Catalog, SpecialOffers, Subscribe } from "../components";

import cs from "../scss/global/_index.module.scss";

const categories = ["clothes", "shoes", "accessories", "boys"];

export const CatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [object, category] = location.pathname.split("/").filter((crumb) => crumb !== "");

  React.useEffect(() => {
    if (!categories.includes(category)) navigate("404");
  }, []);

  if (!categories.includes(category)) return;

  return (
    <main>
      <h1 className={cs.srOnly}>Catalog of products</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <Catalog object={object} category={category} />
      <Subscribe />
    </main>
  );
};
