import qs from "qs";

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../redux/store";

import { useGetAllCatalogProductsQuery, useGetProductReviewsByIdQuery } from "../redux/backendApi";
import { selectProductReviews } from "../redux/productReviewsSlice/selectors";
import { sortNames } from "../redux/productReviewsSlice/slice";

import { Breadcrumbs, CompleteLook, SingleProduct, SpecialOffers } from "../components";

import cs from "../scss/global/_index.module.scss";

export const SingleProductPage: React.FC = () => {
  const isMount = React.useRef(true);
  const navigate = useNavigate();
  const location = useLocation();

  const { page, limit, sortIndex } = useAppSelector(selectProductReviews);
  const sort = sortNames?.[sortIndex]?.property.replace(/^\-/, "");
  const order = sortNames?.[sortIndex]?.property.startsWith("-") ? "asc" : "desc";

  const [object, category, id] = location.pathname.split("/").filter((path) => path !== "");

  const request = `?object_like=${object}&category_like=${category}&id=${id}`;
  const requestReviews = `?productId_like=${id}&_sort=${sort}&_order=${order}&_page=${page}&_limit=${limit}`;
  const requestQS = qs.stringify({
    sort,
    order,
    page,
  });

  const { data, isError: isError1 } = useGetAllCatalogProductsQuery(request);
  const { data: reviewsData, isError: isError2 } = useGetProductReviewsByIdQuery(requestReviews);

  React.useEffect(() => {
    if (sortIndex !== 0 || page !== 1) {
      isMount.current = false;
    }

    if (!isMount.current) {
      navigate(`?${requestQS}`);
    }
  }, [page, sortIndex]);

  if (isError1 || isError2) {
    navigate("404");
  }

  if (!data || !reviewsData) return;
  const { apiResponse: productReviews, totalCount: reviewsCount } = reviewsData;

  if (data.length === 0) {
    navigate("404");
  }

  return (
    <main>
      <h1 className={cs.srOnly}>{data[0].title}</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <SingleProduct
        product={data[0]}
        productReviews={productReviews}
        reviewsCount={reviewsCount}
      />
      <CompleteLook productId={id} />
    </main>
  );
};
