import { Decimal } from "decimal.js/decimal";

import { CartProductType } from "../../redux/cartSlice/types";

export const calcCartSum = (cartProducts: CartProductType[]) => {
  if (cartProducts.length === 0) return "0";
  let pricesArray = [];

  for (let i = 0; i < cartProducts.length; i++) {
    pricesArray.push(+cartProducts[i].obj.price * (+cartProducts[i].count || 1));
  }

  const sum = Decimal.sum(...pricesArray);
  return sum.toFixed(2);
};
