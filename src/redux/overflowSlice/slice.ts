import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { overflowType } from "./types";

const initialState: overflowType = {
  isOverflow: [],
};

const overflowSlice = createSlice({
  name: "overflow",
  initialState,
  reducers: {
    toggleOverflow: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.isOverflow = state.isOverflow.filter((el, i) => (i === 0 ? false : el));
      } else {
        state.isOverflow = [...state.isOverflow, "overflow"];
      }
    },
  },
});

export const { toggleOverflow } = overflowSlice.actions;

export default overflowSlice.reducer;
