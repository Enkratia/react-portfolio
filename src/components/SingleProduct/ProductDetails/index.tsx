import React from "react";

import { ProductType } from "../../../redux/backendApi/types";

import { Product } from "../../../components";

import { capitalize } from "../../../util/customFunctions";

import s from "./ProductDetails.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

type ProductDetailsProps = {
  activeTab: number;
  product: ProductType;
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({ activeTab, product }) => {
  const pd = product.productDetails;

  return (
    <div
      className={`${s.root} ${activeTab === 1 ? s.rootShow : ""}`}
      id="product-details"
      role="tabpanel">
      {/* <!-- Left --> */}
      <div className={s.left}>
        {/* <!-- Section1 --> */}
        <section className={s.section}>
          <h3 className={s.title}>Details</h3>

          <p className={s.descr}>{pd.details.description}</p>

          <ul className={s.list}>
            <li className={s.item}>{`Brand: ${capitalize(product.brand as string)}`}</li>

            {product.color && <li className={s.item}>{`Color: ${product.color.join(" / ")}`}</li>}

            {pd.details.items.map((item) => (
              <li className={s.item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* <!-- Section2 --> */}
        <section className={s.section}>
          <h3 className={s.title}>Fabric</h3>

          <ul className={s.list}>
            {pd.fabric.map((item) => (
              <li className={s.item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* <!-- Section3 --> */}
        <section className={s.section}>
          <h3 className={s.title}>Care</h3>

          <ul className={s.list}>
            {Object.entries(pd.care).map(([selector, item]) => (
              <li className={`${s.item} ${s[`itemCare${capitalize(selector)}`]}`}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* <!-- Right --> */}
      <div className={s.right}>
        <Product obj={product} mode="lg" isSlider={false} isPermanentHover={true} isCommon={true} />
      </div>
    </div>
  );
};
