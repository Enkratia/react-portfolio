import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProductType, CartStateType } from "./types";
import { getCartFromLS, removeProductCart } from "../../util/customFunctions";

const initialState: CartStateType = {
  products: getCartFromLS(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      state.products = [...state.products, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<CartProductType>) => {
      state.products = removeProductCart(action.payload, state.products);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
