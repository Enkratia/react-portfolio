import { RootState } from "../store";

export const selectHeaderMenu = (state: RootState) => state.headerMenuBtn.isOpen;
