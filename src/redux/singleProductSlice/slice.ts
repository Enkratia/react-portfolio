import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SingleProductState } from "./types";

const initialState: SingleProductState = {
  spColor: 0,
  spSize: 0,
  sizeSelect: null,
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setSpColor: (state, action: PayloadAction<number>) => {
      state.spColor = action.payload;
    },
    setSpSize: (state, action: PayloadAction<number>) => {
      state.spSize = action.payload;
    },
    setSizeSelect: (state, action: PayloadAction<React.RefObject<HTMLDivElement>>) => {
      state.sizeSelect = action.payload;
    },
  },
});

export const { setSpColor, setSpSize } = singleProductSlice.actions;

export default singleProductSlice.reducer;
