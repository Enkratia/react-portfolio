import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartProductType, CartStateType, SetCountCartType1, SetCountCartType2 } from "./types";
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
    setCountCart: (state, action: PayloadAction<SetCountCartType1>) => {
      state.products = state.products.map((product) => {
        if (product.hash === action.payload.hash) {
          return {
            ...product,
            count: action.payload.count,
          };
        } else {
          return product;
        }
      });
    },
    incrementCountCart: (state, action: PayloadAction<SetCountCartType2>) => {
      state.products = state.products.map((product) => {
        if (product.hash === action.payload.hash) {
          return {
            ...product,
            count: (+product.count + 1).toString(),
          };
        } else {
          return product;
        }
      });
    },
    decrementCountCart: (state, action: PayloadAction<SetCountCartType2>) => {
      state.products = state.products.map((product) => {
        if (product.hash === action.payload.hash) {
          return {
            ...product,
            count: (+product.count - 1).toString(),
          };
        } else {
          return product;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, setCountCart, incrementCountCart, decrementCountCart } =
  cartSlice.actions;

export default cartSlice.reducer;
