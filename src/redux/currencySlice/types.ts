export interface CurrencyKeys {
  [key: string]: string;
}

export interface CurrencyType {
  currency: string;
  rates: Record<string, number | undefined>;
}

// export type ExchangeRatesType = {
//   disclaimer: string;
//   license: string;
//   timestamp: number;
//   base: string;
//   rates: Record<string, number>[];
// };
