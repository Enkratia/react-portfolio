import { RootState } from "../store";

export const selectOverflow = (state: RootState) => state.overflow.isOverflow;
