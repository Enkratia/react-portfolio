import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogState } from "./types";

const initialState: CatalogState = {
  filters: {
    type: [],
    size: [],
    color: [],
    material: [],
    brand: [],
    price: [],
  },
  coord: 0,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<Record<string, string | number>>) => {
      let title = action.payload.title;
      const type = action.payload.type as string;

      if (title === ("clothes" || "shoes" || "accessories")) title = "type";

      if (state.filters[title].includes(type)) {
        state.filters[title] = state.filters[title].filter((ftype) => ftype !== type);
      } else {
        state.filters[title] = [...state.filters[title], type];
      }

      state.coord = action.payload.coord as number;
    },
    setPriceType: (state, action: PayloadAction<string[]>) => {
      state.filters.price = action.payload;
    },
  },
});

export const { setType, setPriceType } = catalogSlice.actions;

export default catalogSlice.reducer;
