import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

const headerCartBtnSlice = createSlice({
  name: "headerCartBtn",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isCartOpen = true;
    },
    closeCart: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const { openCart, closeCart } = headerCartBtnSlice.actions;

export default headerCartBtnSlice.reducer;
