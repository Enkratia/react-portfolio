import React from "react";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { addFavorite, removeFavorite } from "../../redux/favoriteSlice/slice";
import { selectFavorites } from "../../redux/favoriteSlice/selectors";

import s from "./FavoriteBtn.module.scss";
// import cs from "../../scss/global/_index.module.scss";
import { HeartFull } from "../../iconComponents";

type FavoriteBtnProps = {
  index: number;
  mode?: string;
  style?: string;
};

export const FavoriteBtn: React.FC<FavoriteBtnProps> = ({ index, mode, style }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const onFavoriteClick = (id: number) => {
    if (favorites.includes(id)) {
      dispatch(removeFavorite(id));
      localStorage.setItem("favorite", JSON.stringify(favorites.filter((n) => n !== id)));
      return;
    }
    dispatch(addFavorite(id));
    localStorage.setItem("favorite", JSON.stringify([...favorites, id]));
  };

  return (
    <button
      type="button"
      onClick={() => onFavoriteClick(index)}
      className={`${mode === "cart" ? s.rootCart : s.rootProduct} ${
        favorites.includes(index) ? s.rootActive : ""
      } ${style}`}
      data-visible
      aria-label="Add to favorite.">
      <HeartFull aria-hidden="true" />
    </button>
  );
};
