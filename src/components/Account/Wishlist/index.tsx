import React from "react";

import { useGetAllCatalogProductsQuery } from "../../../redux/backendApi";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { selectFavorites } from "../../../redux/favoriteSlice/selectors";
import { resetFavorite } from "../../../redux/favoriteSlice/slice";

import { Product } from "../../../components";

import s from "./Wishlist.module.scss";
import { SkeletonProduct } from "../../Skeletons";
import { Bin } from "../../../iconComponents";

export const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector(selectFavorites);

  const { data, isLoading, isError } = useGetAllCatalogProductsQuery(
    `?id=${favorite.join("&id=")}`,
  );

  if (isError) {
    console.warn("Failed to load products.");
    alert("Failed to load products.");
  }

  const onDeleteClick = () => {
    dispatch(resetFavorite());
    localStorage.setItem("favorite", JSON.stringify([]));
  };

  return (
    <div className={s.root}>
      {/* <!-- Top --> */}
      <div className={s.top}>
        <p className={s.title}>Wishlist</p>

        {data && data.length > 0 && (
          <button onClick={onDeleteClick} className={s.delete}>
            <Bin aria-hidden="true" />
            Delete all
          </button>
        )}
      </div>

      {/* <!-- List --> */}
      <ul className={s.list}>
        {isLoading || !data
          ? [...Array(2)].map((_, i) => <SkeletonProduct key={i} />)
          : data.map((product) => (
              <li key={product.id} className={s.item}>
                <Product obj={product} mode="lg" isSlider={false} />
              </li>
            ))}
      </ul>
    </div>
  );
};
