import { RootState } from "../store";

export const selectFavorites = (state: RootState) => state.favorite.favorites;
