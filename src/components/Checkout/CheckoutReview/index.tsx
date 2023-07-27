import React from "react";

import { useAppSelector } from "../../../redux/store";
import { selectCartProducts } from "../../../redux/cartSlice/selectors";
import { CartProductType } from "../../../redux/cartSlice/types";

import s from "./CheckoutReview.module.scss";
import { CartProduct } from "../../../components";

import { calcCartSum } from "../../../util/customFunctions";

export const CheckoutReview: React.FC = () => {
  const cartProducts = useAppSelector(selectCartProducts) as CartProductType[];
  const cartSum = calcCartSum(cartProducts);

  if (+cartSum === 0) return;

  return (
    <div className={s.root}>
      <ul className={s.list} data-checkout="checkout-cart-products">
        {cartProducts.map((product, i) => (
          <CartProduct key={i} product={product} cartProducts={cartProducts} />
        ))}
      </ul>

      <span className={s.subtotal}>{`Subtotal: $${calcCartSum(cartProducts)}`}</span>
    </div>
  );
};
