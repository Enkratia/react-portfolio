import React from "react";
import { Link } from "react-router-dom";

import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import s from "./HeaderCart.module.scss";
import cs from "../../../scss/global/_index.module.scss";

import { Bin, Cross, HeartFull, Wallet } from "../../../iconComponents";
import Jeans from "../../../assets/img/product-sweatshirt.jpg";

type HeaderCartProps = {
  onCloseClick: () => void;
};

const CartProduct: React.FC = () => {
  return (
    <li className={s.item}>
      <article className={s.itemProduct}>
        <img src={Jeans} alt="Product-image." className={s.itemImage} />

        <div className={s.itemText}>
          <span className={s.itemTitle}>Basic hooded sweatshirt in pink</span>

          <div className={s.itemColor}>
            <span className={s.itemColorTitle}>Color:</span>
            <span className={s.itemColorData}>pink</span>
          </div>

          <div className={s.itemSize}>
            <span className={s.itemSizeTitle}>Size:</span>
            <span className={s.itemSizeData}>S</span>
          </div>
        </div>

        <div className={`${s.itemInputNum} ${cs.inputNum}`}>
          <input
            type="text"
            className={`${cs.inputNumInput} ${cs.input}`}
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
          <span className={`${s.itemPrice} ${s.itemPriceRed}`}>$15.50</span>
          <span className={s.itemOldPrice}>$31.00</span>
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
  const scrollbarOptions = {
    scrollbars: {
      theme: s.osThemeCartChoice,
    },
  };

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
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

        <OverlayScrollbarsComponent options={scrollbarOptions} defer>
          <div className={s.listWrapper}>
            <ul className={`${s.list} ${cs.ulReset}`}>
              {[...Array(6)].map(() => (
                <CartProduct />
              ))}
            </ul>
          </div>
        </OverlayScrollbarsComponent>

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
    </div>
  );
};
