import React from "react";

import { ProductType, ProductReviewType } from "../../redux/backendApi/types";

import { GeneralInfo, ProductDetails, ProductReviews } from "../../components";

import s from "./SingleProduct.module.scss";
import cs from "../../scss/global/_index.module.scss";

const tabNames = ["General info", "Product details", "Reviews"];

type SingleProductProps = {
  product: ProductType;
  productReviews: ProductReviewType[];
  reviewsCount: number;
};

export const SingleProduct: React.FC<SingleProductProps> = ({
  product,
  productReviews,
  reviewsCount,
}) => {
  const selectRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        {/* <!-- Text --> */}
        <div className={s.text}>
          <h2 className={`${s.title} ${cs.sectionTitle}`}>{product.title}</h2>

          <div className={s.vendor}>
            <span className={s.vendorText}>Art. No.</span>
            <span className={s.vendorNumber}>{" " + product.id}</span>
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div className={s.tabsWrapper}>
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

                  {tabName === "Reviews" && <span className={cs.tabCount}>{reviewsCount}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>

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

        {/* <!-- Product details --> */}
        {/* <!-- Reviews --> */}
      </div>

      {/* <!-- Chart --> */}
      {/* <!-- Image modal --> */}
      {/* <!-- Leave review --> */}
    </section>
  );
};
