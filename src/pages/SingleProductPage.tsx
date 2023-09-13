import qs from "qs";

import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../redux/store";

import { useGetAllCatalogProductsQuery, useGetProductReviewsByIdQuery } from "../redux/backendApi";
import { selectProductReviews } from "../redux/productReviewsSlice/selectors";
import { sortNames } from "../redux/productReviewsSlice/slice";

import {
  Breadcrumbs,
  CompleteLook,
  RecentlyViewed,
  RelatedProducts,
  SingleProduct,
  SpecialOffers,
  Subscribe,
} from "../components";

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

  const { data, isError: isErrorData } = useGetAllCatalogProductsQuery(request);

  const { data: reviewsData, isError: isErrorReviews } =
    useGetProductReviewsByIdQuery(requestReviews);

  React.useEffect(() => {
    if (sortIndex !== 0 || page !== 1) {
      isMount.current = false;
    }

    if (!isMount.current) {
      navigate(`?${requestQS}`, { preventScrollReset: true });
    }
  }, [page, sortIndex]);

  if (isErrorData || isErrorReviews) {
    if (isErrorData) {
      console.warn("Failed to load products data.");
    } else {
      console.warn("Failed to load product reviews data.");
    }

    alert("Failed to load data");
    return <Navigate to="/" />;
  }

  const productReviews = reviewsData?.apiResponse;
  const reviewsCount = reviewsData?.totalCount;

  return (
    <main>
      <h1 className={cs.srOnly}>{data?.[0].title}</h1>
      <SpecialOffers />
      <Breadcrumbs />
      <SingleProduct
        product={data?.[0]}
        productReviews={productReviews}
        reviewsCount={reviewsCount}
      />
      <CompleteLook productId={id} />
      <RelatedProducts />
      <RecentlyViewed productId={id} />
      <Subscribe />
    </main>
  );
};
