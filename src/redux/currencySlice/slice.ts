import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyType } from "./types";

import axios from "axios";

export enum CurrencyInfoEnum {
  USD = "USD",
  EUR = "EUR",
  RUB = "RUB",
}

export const getCurrencies = createAsyncThunk("currency/getCurrencies", async (apiKey: string) => {
  try {
    const { data } = await axios.get(
      `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`,
    );

    if (data) return data.rates;
  } catch (err) {
    alert("Ошибка при загрузке валют.");
    console.warn("Ошибка при загрузке валют.");
  }
});

const initialState: CurrencyType = {
  activeRate: CurrencyInfoEnum.USD,
  rates: {
    USD: 1,
    EUR: undefined,
    RUB: undefined,
  },
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.activeRate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrencies.fulfilled, (state, action) => {
      state.rates = {
        USD: 1,
        EUR: action.payload.EUR,
        RUB: action.payload.RUB,
      };
    });
  },
});

export const { setCurrency } = currencySlice.actions;

export default currencySlice.reducer;
