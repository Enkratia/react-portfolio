import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../redux/store";
import { selectFavorites } from "../../../redux/favoriteSlice/selectors";

import s from "./HeaderChoice.module.scss";

import { Cart, Heart } from "../../../iconComponents";

export const HeaderChoice: React.FC = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <div className={s.root}>
      <div className={s.favorite}>
        <Link to={"/"} className={s.favoriteBtn} aria-label="Go to observe favorites.">
          <Heart aria-hidden="true" />
        </Link>

        <span className={s.favoriteCount}>{favorites.length > 0 ? favorites.length : ""}</span>
      </div>

      <div className={s.divider}></div>

      <div className={s.cart}>
        <button className={s.cartBtn} aria-label="Observe cart.">
          <Cart aria-hidden="true" />
        </button>

        <span className={s.cartCount}>4</span>
      </div>
    </div>
  );
};
