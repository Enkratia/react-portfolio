import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useGetAllCatalogProductsQuery } from "../redux/backendApi";

import { Breadcrumbs, SingleProduct, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

export const SingleProductPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [object, category, id] = location.pathname.split("/").filter((path) => path !== "");

  const request = `?object_like=${object}&category_like=${category}&id=${id}`;
  const { data, isError } = useGetAllCatalogProductsQuery(request);

  if (isError) {
    navigate("404");
  }

  if (!data) return;

  if (data.length === 0) {
    navigate("404");
  }

  return (
    <main>
      <h1 className={cs.srOnly}>{data[0].title}</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <SingleProduct product={data[0]} />
    </main>
  );
};
