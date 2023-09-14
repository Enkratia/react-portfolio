import React from "react";
import { ScrollRestoration } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import { ProductType, ProductReviewType } from "../../redux/backendApi/types";
import { setBreadcrumbsTitle } from "../../redux/breadcrumbsSlice/slice";

import { GeneralInfo, ProductDetails, ProductReviews } from "../../components";

import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import s from "./SingleProduct.module.scss";
import cs from "../../scss/global/_index.module.scss";
import {
  SkeletonSingleProductGeneral,
  SkeletonSingleProductDetails,
  SkeletonSingleProductReviews,
  SkeletonSingleProductTitle,
  SkeletonSingleProductNumber,
} from "../Skeletons";

const tabNames = ["General info", "Product details", "Reviews"];

type SingleProductProps = {
  product: ProductType | undefined;
  productReviews: ProductReviewType[] | undefined;
  reviewsCount: number | undefined;
};

const scrollbarOptions = {
  scrollbars: {
    theme: s.osThemeDownloadFiles,
  },
};

export const SingleProduct: React.FC<SingleProductProps> = ({
  product,
  productReviews,
  reviewsCount,
}) => {
  const dispatch = useAppDispatch();

  const selectRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    if (!product?.title) return;
    dispatch(setBreadcrumbsTitle(product.title));

    return () => {
      dispatch(setBreadcrumbsTitle(undefined));
    };
  }, [product?.title]);

  const isLoading = !product || !productReviews || !reviewsCount;

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Text --> */}
        <div className={s.text}>
          {isLoading ? (
            <SkeletonSingleProductTitle />
          ) : (
            <h2 className={`${s.title} ${cs.sectionTitle}`}>{product.title}</h2>
          )}

          <div className={s.vendor}>
            <span className={s.vendorText}>Art. No.</span>

            {isLoading ? (
              <SkeletonSingleProductNumber />
            ) : (
              <span className={s.vendorNumber}>{product.id}</span>
            )}
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div className={s.tabsWrapper}>
          <OverlayScrollbarsComponent className={s.tabsScrollbar} options={scrollbarOptions} defer>
            <ul className={s.tabs} role="tablist" data-overlayscrollbars-initialize>
              {tabNames.map((tabName, i) => (
                <li key={i} className={s.tabsItem} role="presentation">
                  <button
                    onClick={() => setActiveTab(i)}
                    className={`${s.tab} ${cs.tab} ${activeTab === i ? cs.tabActive : ""}`}
                    role="tab"
                    aria-selected={activeTab === i ? "true" : "false"}
                    aria-controls={`single-product-${i}`}>
                    {tabName}

                    {tabName === "Reviews" && (
                      <span className={cs.tabCount}>{reviewsCount ? reviewsCount : ""}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </OverlayScrollbarsComponent>
        </div>

        {isLoading ? (
          activeTab === 0 ? (
            <SkeletonSingleProductGeneral />
          ) : activeTab === 1 ? (
            <SkeletonSingleProductDetails />
          ) : (
            <SkeletonSingleProductReviews />
          )
        ) : (
          <>
            <GeneralInfo
              activeTab={activeTab}
              product={product}
              selectRef={selectRef}
              reviewsCount={reviewsCount}
            />

            <ProductDetails activeTab={activeTab} product={product} selectRef={selectRef} />

            <ProductReviews
              activeTab={activeTab}
              product={product}
              selectRef={selectRef}
              productReviews={productReviews}
              reviewsCount={reviewsCount}
            />
          </>
        )}
      </div>
      <ScrollRestoration />
    </section>
  );
};
