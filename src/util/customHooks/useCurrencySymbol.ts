import { selectCurrency } from "../../redux/currencySlice/selectors";
import { useAppSelector } from "../../redux/store";

import { currencies } from "../../components";

export const useCurrencySymbol = () => {
  const { activeRate } = useAppSelector(selectCurrency);
  return currencies.filter((curr) => curr.sort === activeRate)[0].symbol;
};
