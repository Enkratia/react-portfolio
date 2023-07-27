import React from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { selectCartProducts } from "../../../redux/cartSlice/selectors";
import { CartProductType } from "../../../redux/cartSlice/types";
import {
  setCountCart,
  removeFromCart,
  incrementCountCart,
  decrementCountCart,
} from "../../../redux/cartSlice/slice";

import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { FavoriteBtn } from "../../FavoriteBtn";

import s from "./HeaderCart.module.scss";
import cs from "../../../scss/global/_index.module.scss";

import { Bin, Cross, Wallet } from "../../../iconComponents";
import { calcCartSum, getCartFromLS, removeProductCart } from "../../../util/customFunctions";

type HeaderCartProps = {
  onCloseClick: () => void;
};

type CartProductProps = {
  product: CartProductType;
  cartProducts: CartProductType[];
};

export const CartProduct: React.FC<CartProductProps> = ({ product, cartProducts }) => {
  const dispatch = useAppDispatch();
  const count = product.count;

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  });

  const onCountBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      const hash = product.obj.title + product.color + product.size;
      dispatch(setCountCart({ count: "1", hash }));
    }
  };

  const onCountDownClick = () => {
    if (+count <= 1) return;
    const hash = product.obj.title + product.color + product.size;
    dispatch(decrementCountCart({ hash }));
  };

  const onCountUpClick = () => {
    if (+count >= 1000000) return;
    const hash = product.obj.title + product.color + product.size;
    dispatch(incrementCountCart({ hash }));
  };

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let count = e.currentTarget.value.replace(/\D|^0$/gi, "");
    const hash = product.obj.title + product.color + product.size;
    dispatch(setCountCart({ count, hash }));
  };

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
            onBlur={onCountBlur}
            onChange={onCountChange}
            type="text"
            className={`${cs.inputNumInput} ${cs.input}`}
            value={count}
            aria-label="Write the count of products in cart"
            maxLength={7}
          />

          <div className={cs.inputNumBtns}>
            <button
              type="button"
              onClick={onCountUpClick}
              className={cs.inputNumBtn}
              aria-label="Increment number of product."></button>

            <button
              type="button"
              onClick={onCountDownClick}
              className={cs.inputNumBtn}
              aria-label="Decrement number of product."></button>
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
          type="button"
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
              cartProducts.map((product, i) => (
                <CartProduct key={i} product={product} cartProducts={cartProducts} />
              ))}
          </ul>
        </OverlayScrollbarsComponent>

        {/* <!-- Cart choice bottom --> */}
        <div className={s.bottom}>
          <div className={s.subtotal}>
            <span className={s.subtotalTitle}>Subtotal:</span>
            <span className={s.subtotalSum}>{`$${calcCartSum(cartProducts)}`}</span>
          </div>

          <Link
            to={"checkout"}
            onClick={onCloseClick}
            className={`${s.checkout} ${cs.btn} ${cs.btnLg}`}>
            <Wallet aria-hidden="true" />
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
