import { Decimal } from "decimal.js/decimal";

import { selectCurrency } from "../../redux/currencySlice/selectors";
import { useAppSelector } from "../../redux/store";

export const useConvertPrice = (price: number | number[][], count?: number) => {
  const { rates, activeRate } = useAppSelector(selectCurrency);
  let convertedResult;

  const calcSingleSum = (
    price: number,
    count: number | undefined,
    discount?: number | undefined,
  ) => {
    const singlePrice = new Decimal(
      price * (rates[activeRate] || 1) * ((discount && discount / 100) || 1),
    ).toFixed(2);

    return new Decimal(+singlePrice * (count || 1)).toFixed(2);
  };

  if (typeof price === "number") {
    convertedResult = calcSingleSum(price, count);
  } else {
    convertedResult = price.map(([price, count, discount]) => {
      return calcSingleSum(price, count, discount);
    });
  }

  return convertedResult;
};
