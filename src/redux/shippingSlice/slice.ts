import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShippingState } from "./types";

const initialState: ShippingState = {
  isActiveShip: 0,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    setIsActiveShip: (state, action: PayloadAction<number>) => {
      state.isActiveShip = action.payload;
    },
  },
});

export const { setIsActiveShip } = shippingSlice.actions;

export default shippingSlice.reducer;
