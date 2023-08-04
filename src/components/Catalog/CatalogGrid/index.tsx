import React from "react";

import { Product, CatalogNotFound } from "../../../components";
import { ProductsType } from "../../../redux/backendApi/types";

import s from "./CatalogGrid.module.scss";

type CatalogGridProps = {
  data: ProductsType;
};

export const CatalogGrid: React.FC<CatalogGridProps> = ({ data }) => {
  return (
    <div className={s.root} data-catalog="grid">
      {data.length > 0 ? (
        data.map((product) => <Product key={product.id} obj={product} isSlider={false} />)
      ) : (
        <CatalogNotFound />
      )}
    </div>
  );
};
