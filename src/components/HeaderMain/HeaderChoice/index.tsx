import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../../redux/store";
import { selectFavorites } from "../../../redux/favoriteSlice/selectors";

import s from "./HeaderChoice.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Cart, Heart } from "../../../iconComponents";

import { HeaderCart } from "../HeaderCart";

export const HeaderChoice: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
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

      <div className={`${s.cart} ${isCartOpen ? s.cartOpen : ""}`}>
        <button
          onClick={() => setIsCartOpen((b) => !b)}
          className={`${s.cartBtn} ${cs.btnReset}`}
          aria-label="Observe cart.">
          <Cart aria-hidden="true" />
        </button>

        <span className={s.cartCount}>4</span>
        <HeaderCart onCloseClick={() => setIsCartOpen((b) => !b)} />
      </div>
    </div>
  );
};
