import { Decimal } from "decimal.js/decimal";
import { v4 as uuidv4 } from "uuid";

import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { removeFromCart } from "../../../redux/cartSlice/slice";
import { selectCartProducts } from "../../../redux/cartSlice/selectors";
import { CartProductType } from "../../../redux/cartSlice/types";

import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { FavoriteBtn } from "../../FavoriteBtn";

import s from "./HeaderCart.module.scss";
import cs from "../../../scss/global/_index.module.scss";

import { Bin, Cross, Wallet } from "../../../iconComponents";
import { getCartFromLS, removeProductCart } from "../../../util/customFunctions";

type HeaderCartProps = {
  onCloseClick: () => void;
};

type CartProductProps = {
  product: CartProductType;
};

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const onRemoveClick = () => {
    dispatch(removeFromCart(product));
    const cart = getCartFromLS() as CartProductType[];
    const newCart = removeProductCart(product, cart);

    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <li className={s.item}>
      <article className={s.itemProduct}>
        <Link to={product.obj.linkUrl} className={s.itemBox}>
          <img src={product.obj.imageUrls[0]} alt="Product-image." className={s.itemImage} />
        </Link>

        <div className={s.itemText}>
          <Link to={product.obj.linkUrl}>
            <span className={s.itemTitle}>{product.obj.title}</span>
          </Link>

          <div className={s.itemColor}>
            <span className={s.itemColorTitle}>Color:</span>
            <span className={s.itemColorData}>{product.color}</span>
          </div>

          <div className={s.itemSize}>
            <span className={s.itemSizeTitle}>Size:</span>
            <span className={s.itemSizeData}>{product.size}</span>
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
          <span className={`${s.itemPrice} ${product.obj.oldPrice > 0 ? s.itemPriceRed : ""}`}>
            ${product.obj.price.toFixed(2)}
          </span>

          {product.obj.oldPrice > 0 && (
            <span className={s.itemOldPrice}>${product.obj.oldPrice.toFixed(2)}</span>
          )}
        </div>

        <button
          onClick={onRemoveClick}
          className={s.itemDelete}
          aria-label="Delete this product from the cart.">
          <Bin aria-hidden="true" />
        </button>

        <FavoriteBtn index={product.obj.id} mode="cart" style={s.itemFavorite} />
      </article>
    </li>
  );
};

export const HeaderCart: React.FC<HeaderCartProps> = ({ onCloseClick }) => {
  const cartProducts = useAppSelector(selectCartProducts);

  const calcCartSum = () => {
    if (cartProducts.length === 0) return "0";

    let pricesArray = [];

    for (let i = 0; i < cartProducts.length; i++) {
      pricesArray.push(+cartProducts[i].obj.price);
    }

    const sum = Decimal.sum(...pricesArray);
    return sum.toFixed(2);
  };

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
            <span className={`${s.titleCount} ${cartProducts.length > 0 ? s.titleCountShow : ""}`}>
              {` (${cartProducts.length})`}
            </span>
          </span>

          <button
            onClick={onCloseClick}
            className={`${s.close} ${cs.btnReset}`}
            aria-label="Close cart.">
            <Cross aria-hidden="true" />
          </button>
        </div>

        {/* <!-- Cart choice list --> */}
        <OverlayScrollbarsComponent className={s.listWrapper} options={scrollbarOptions} defer>
          <ul className={`${s.list} ${cs.ulReset}`}>
            {cartProducts.length > 0 &&
              cartProducts.map((product) => <CartProduct key={uuidv4()} product={product} />)}
          </ul>
        </OverlayScrollbarsComponent>

        {/* <!-- Cart choice bottom --> */}
        <div className={s.bottom}>
          <div className={s.subtotal}>
            <span className={s.subtotalTitle}>Subtotal:</span>
            <span className={s.subtotalSum}>{`$${calcCartSum()}`}</span>
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
