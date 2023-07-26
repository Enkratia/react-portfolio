import { RootState } from "../store";

export const selectProductBtn = (state: RootState) => state.productBtn.isResetAllBtn;
