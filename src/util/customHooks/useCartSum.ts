import { Decimal } from "decimal.js/decimal";

import { CartProductType } from "../../redux/cartSlice/types";
import { useConvertPrice } from "../customHooks";

export const useCartSum = (cartProducts: CartProductType[]) => {
  let pricesArray = [[0, 0]];
  let discountsArray = [[0, 0]];

  pricesArray = cartProducts.map((p) => [p.obj.price, +p.count]);
  discountsArray = cartProducts.map((p) => [p.obj.oldPrice, +p.count]);

  // for (let i = 0; i < cartProducts.length; i++) {
  //   pricesArray.push(
  //     +new Decimal(+cartProducts[i].obj.price * (+cartProducts[i].count || 1)).toFixed(2),
  //   );

  //   discountsArray.push(
  //     +new Decimal(
  //       (+cartProducts[i].obj.discount / 100) *
  //         cartProducts[i].obj.oldPrice *
  //         (+cartProducts[i].count || 1),
  //     ).toFixed(2),
  //   );
  // }

  const isProducts = cartProducts.length !== 0;

  if (!isProducts) {
    pricesArray = [[0, 0]];
    discountsArray = [[0, 0]];
  }

  const convertedPricesSum = useConvertPrice(isProducts ? pricesArray : [0]);
  const convertedDiscountSum = useConvertPrice(isProducts ? discountsArray : [0]);

  const convertedPricesSumResult = new Decimal(...convertedPricesSum);
  const convertedDiscountSumResult = new Decimal(...convertedDiscountSum);

  // console.log(convertedPricesSum);

  // let pricesSum = useConvertPrice(isProducts ? +Decimal.sum(...pricesArray) : 0);
  // let discountsSum = useConvertPrice(isProducts ? +Decimal.sum(...discountsArray) : 0);

  // let pricesSum = isProducts ? Decimal.sum(...convertedPricesSum).toFixed(2) : "0";
  // let discountsSum = isProducts ? Decimal.sum(...convertedDiscountSum).toFixed(2) : "0";

  // if (!isProducts) {
  //   pricesSum = "0";
  //   discountsSum = "0";
  // }

  return { subtotal: convertedPricesSumResult, discount: convertedDiscountSumResult };
};
