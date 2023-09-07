import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyType, CurrencyKeys } from "./types";

import axios from "axios";

const currencyInfo: CurrencyKeys = {
  eng: "USD",
  eu: "EUR",
  ru: "RUB",
};

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
  currency: currencyInfo[0],
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
    setCurrency: (state, action) => {
      state;
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

export default currencySlice.reducer;
