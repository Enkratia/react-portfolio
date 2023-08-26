import React from "react";

import { useGetAllCatalogProductsQuery } from "../../../redux/backendApi";

import { getViewedFromLS } from "../../../util/customFunctions";
import { Product } from "../../../components";

import s from "./Viewed.module.scss";
import { Bin } from "../../../iconComponents";

export const Viewed: React.FC = () => {
  const [viewed, setViewed] = React.useState(getViewedFromLS() as number[]);

  const { data } = useGetAllCatalogProductsQuery(`?id=${viewed.join("&id=")}`);
  if (!data) return;

  const onDeleteClick = () => {
    setViewed([]);
    localStorage.setItem("recentlyViewed", JSON.stringify([]));
  };

  return (
    <div className={s.root}>
      {/* <!-- Top --> */}
      <div className={s.top}>
        <p className={s.title}>Recently viewed</p>

        <button onClick={onDeleteClick} className={s.delete}>
          <Bin aria-hidden="true" />
          Delete all
        </button>
      </div>

      {/* <!-- List --> */}
      <ul className={s.list}>
        {data.length > 0 &&
          data.map((product) => (
            <li key={product.id} className={s.item}>
              <Product obj={product} mode="lg" isSlider={false} />
            </li>
          ))}
      </ul>
    </div>
  );
};