import { Decimal } from "decimal.js/decimal";

import { CartProductType } from "../../redux/cartSlice/types";

export const calcCartSum = (cartProducts: CartProductType[]) => {
  if (cartProducts.length === 0) return { subtotal: "0", discount: "0" };
  let pricesArray = [];
  let discountsArray = [];

  for (let i = 0; i < cartProducts.length; i++) {
    pricesArray.push(+cartProducts[i].obj.price * (+cartProducts[i].count || 1));
    discountsArray.push(
      (+cartProducts[i].obj.discount / 100) *
        cartProducts[i].obj.oldPrice *
        (+cartProducts[i].count || 1),
    );
  }

  const pricesSum = Decimal.sum(...pricesArray).toFixed(2);
  let discountsSum;

  if (discountsArray.every((el) => el === 0)) {
    discountsSum = "0";
  } else {
    discountsSum = Decimal.sum(...discountsArray).toFixed(2);
  }

  return { subtotal: pricesSum, discount: discountsSum };
};
