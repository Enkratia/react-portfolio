import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectFavorites } from "../../../redux/favoriteSlice/selectors";
import { selectCartProducts } from "../../../redux/cartSlice/selectors";
import { selectHeaderCartBtn } from "../../../redux/headerCartBtnSlice/selectors";
import { openCart, closeCart } from "../../../redux/headerCartBtnSlice/slice";
import { setIsResetAllBtn } from "../../../redux/productBtnSlice/slice";

import s from "./HeaderChoice.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Cart, Heart } from "../../../iconComponents";

import { HeaderCart } from "../HeaderCart";

export const HeaderChoice: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCartOpen = useAppSelector(selectHeaderCartBtn);

  const favorites = useAppSelector(selectFavorites);
  const cartProducts = useAppSelector(selectCartProducts);

  const onCloseClick = () => {
    dispatch(closeCart());
    dispatch(setIsResetAllBtn(true));
  };

  React.useEffect(() => {
    const html = document.documentElement;

    if (isCartOpen) {
      const htmlWidth = html.offsetWidth;
      const scrollBarWidth = window.innerWidth - htmlWidth;

      html.style.setProperty("--scrollbar-offset", scrollBarWidth + "px");
      html.style.overflowY = "hidden";
      return;
    }

    html.style.setProperty("--scrollbar-offset", "0");
    html.style.overflowY = "";
  }, [isCartOpen]);

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
          onClick={() => dispatch(openCart())}
          className={`${s.cartBtn} ${cs.btnReset}`}
          aria-label="Observe cart.">
          <Cart aria-hidden="true" />
        </button>

        {cartProducts.length > 0 && <span className={s.cartCount}>{cartProducts.length}</span>}

        <HeaderCart onCloseClick={onCloseClick} />
      </div>
    </div>
  );
};
