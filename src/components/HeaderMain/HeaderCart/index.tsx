import React from "react";
import { Link } from "react-router-dom";

import s from "./HeaderCart.module.scss";
import cs from "../../../scss/global/_index.module.scss";
import { Bin, Cross, HeartFull, Wallet } from "../../../iconComponents";

import Jeans from "../../../assets/img/product-jeans.jpg";

type HeaderCartProps = {
  onCloseClick: () => void;
};

const CartProduct = () => {
  return (
    <li className={s.item}>
      <article className={s.itemProduct}>
        <img src={Jeans} alt="Product-image." className={s.itemImage} />

        <div className={s.itemText}>
          <span className={s.itemTitle}>Mid-rise slim cropped fit jeans</span>

          <div className={s.itemColor}>
            <span className={s.itemColorTitle}>Color:</span>
            <span className={s.itemColorData}>Black</span>
          </div>

          <div className={s.itemSize}>
            <span className={s.itemSizeTitle}>Size:</span>
            <span className={s.itemSizeData}>37</span>
          </div>
        </div>

        <div className={`${s.inputNum} ${cs.inputNum}`}>
          <input
            type="text"
            className={cs.inputNumInput}
            value="1"
            aria-label="Write the count of products in cart"
            maxLength={3}
          />

          <div className={cs.inputNumBtns}>
            <button className={cs.inputNumBtn} aria-label="Increment number of product."></button>
            <button className={cs.inputNumBtn} aria-label="Decrement number of product."></button>
          </div>
        </div>

        <div className={s.itemPrices}>
          <span className={s.itemPrice}>$40.00</span>
        </div>

        <button className={s.itemDelete} aria-label="Delete this product from the cart.">
          <Bin aria-hidden="true" />
        </button>

        <button className={`${s.itemFavorite} ${s.itemFavoriteCart}`} aria-label="Add to favorite.">
          <HeartFull aria-hidden="true" />
        </button>
      </article>
    </li>
  );
};

export const HeaderCart: React.FC<HeaderCartProps> = ({ onCloseClick }) => {
  return (
    <div className={s.root}>
      <div className={s.top}>
        <span className={s.title}>
          Your cart
          <span className={s.titleCount}>(0)</span>
        </span>

        <button
          onClick={onCloseClick}
          className={`${s.close} ${cs.btnReset}`}
          aria-label="Close cart.">
          <Cross aria-hidden="true" />
        </button>
      </div>

      {/* <!-- Cart choice list --> */}
      <div className={s.listWrapper} data-overlayscrollbars-initialize>
        <ul className={`${s.list} ${cs.ulReset}`}></ul>
      </div>

      {/* <!-- Cart choice bottom --> */}
      <div className={s.bottom}>
        <div className={s.subtotal}>
          <span className={s.subtotalTitle}>Subtotal:</span>
          <span className={s.subtotalSum}>$0</span>
        </div>

        <Link to={"/"} className={`${s.checkout} ${cs.btn} ${cs.btnLg}`}>
          <Wallet aria-hidden="true" />
          Checkout
        </Link>
      </div>
    </div>
  );
};
