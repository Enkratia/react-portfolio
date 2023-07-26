import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isResetAllBtn: false,
};

const productBtnSlice = createSlice({
  name: "productBtn",
  initialState,
  reducers: {
    setIsResetAllBtn: (state, action: PayloadAction<boolean>) => {
      state.isResetAllBtn = action.payload;
    },
  },
});

export const { setIsResetAllBtn } = productBtnSlice.actions;

export default productBtnSlice.reducer;
