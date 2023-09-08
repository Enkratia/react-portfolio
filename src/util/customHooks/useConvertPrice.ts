import { Decimal } from "decimal.js/decimal";

import { selectCurrency } from "../../redux/currencySlice/selectors";
import { useAppSelector } from "../../redux/store";

export const useConvertPrice = (price: number | number[][], count?: number) => {
  const { rates, activeRate } = useAppSelector(selectCurrency);
  let convertedResult;

  if (typeof price === "number") {
    const singlePrice = new Decimal(price * (rates[activeRate] || 1)).toFixed(2);
    convertedResult = new Decimal(+singlePrice * (count || 1)).toFixed(2);
  } else {
    convertedResult = price.map(([price, count]) => {
      const singlePrice = new Decimal(price * (rates[activeRate] || 1)).toFixed(2);
      convertedResult = new Decimal(+singlePrice * (count || 1)).toFixed(2);
      return convertedResult;

      // new Decimal(p * (rates[activeRate] || 1)).toFixed(2)
    });
  }

  return convertedResult;
};
