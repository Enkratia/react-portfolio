import React from "react";
import { Product } from "../../Product";

import { ProductsType } from "../../../redux/backendApi/types";

import s from "./CatalogGrid.module.scss";

type CatalogGridProps = {
  data: ProductsType;
};

export const CatalogGrid: React.FC<CatalogGridProps> = ({ data }) => {
  return (
    <div className={s.root} id="catalog-grid">
      {data.map((product) => (
        <Product key={product.id} obj={product} />
      ))}
    </div>
  );
};
