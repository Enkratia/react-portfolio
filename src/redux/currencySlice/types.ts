export interface CurrencyRates {
  [key: string]: number | undefined;
}

export interface CurrencyType {
  activeRate: string;
  rates: CurrencyRates;
}

// export type ExchangeRatesType = {
//   disclaimer: string;
//   license: string;
//   timestamp: number;
//   base: string;
//   rates: Record<string, number>[];
// };
