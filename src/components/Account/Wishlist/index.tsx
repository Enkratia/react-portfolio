import React from "react";

import { useGetAllCatalogProductsQuery } from "../../../redux/backendApi";
import { useAppSelector, useAppDispatch } from "../../../redux/store";
import { selectFavorites } from "../../../redux/favoriteSlice/selectors";
import { resetFavorite } from "../../../redux/favoriteSlice/slice";

import { Product } from "../../../components";

import s from "./Wishlist.module.scss";
import { Bin } from "../../../iconComponents";

export const Wishlist: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorite = useAppSelector(selectFavorites);

  const { data } = useGetAllCatalogProductsQuery(`?id=${favorite.join("&id=")}`);
  if (!data) return;

  const onDeleteClick = () => {
    dispatch(resetFavorite());
    localStorage.setItem("favorite", JSON.stringify([]));
  };

  return (
    <div className={s.root}>
      {/* <!-- Top --> */}
      <div className={s.top}>
        <p className={s.title}>Wishlist</p>

        {data.length > 0 && (
          <button onClick={onDeleteClick} className={s.delete}>
            <Bin aria-hidden="true" />
            Delete all
          </button>
        )}
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
