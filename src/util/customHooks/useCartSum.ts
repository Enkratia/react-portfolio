import { Decimal } from "decimal.js/decimal";

import { CartProductType } from "../../redux/cartSlice/types";
import { useConvertPrice } from "../customHooks";

export const useCartSum = (cartProducts: CartProductType[]) => {
  let pricesArray = [[0, 0]];
  let discountsArray = [[0, 0]];

  const isProducts = cartProducts.length !== 0;

  if (isProducts) {
    pricesArray = cartProducts.map((p) => [p.obj.price, +p.count]);
    discountsArray = cartProducts.map((p) => [p.obj.oldPrice, +p.count, p.obj.discount]);
  }

  const convertedPricesArray = useConvertPrice(pricesArray);
  const convertedDiscountArray = useConvertPrice(discountsArray);

  const convertedPricesSum = +Decimal.sum(...convertedPricesArray);
  const convertedDiscountSum = +Decimal.sum(...convertedDiscountArray);

  return {
    subtotal: convertedPricesSum ? convertedPricesSum.toFixed(2) : "0",
    discount: convertedDiscountSum ? convertedDiscountSum.toFixed(2) : "0",
  };
};
