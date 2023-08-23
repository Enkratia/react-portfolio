import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { favoriteState } from "./types";

let favorite;
const favoriteArray = localStorage.getItem("favorite");
if (favoriteArray) {
  favorite = JSON.parse(favoriteArray);
}

const initialState: favoriteState = {
  favorites: favorite || [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((id) => {
        return id !== action.payload;
      });
    },
    resetFavorite: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, resetFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
