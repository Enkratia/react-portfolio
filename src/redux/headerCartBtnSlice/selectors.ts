import { RootState } from "../store";

export const selectHeaderCartBtn = (state: RootState) => state.headerCartBtn.isCartOpen;
