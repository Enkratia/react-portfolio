import { createSlice } from "@reduxjs/toolkit";
import { HeaderMenuBtnState } from "./types";

const initialState: HeaderMenuBtnState = {
  isOpen: false,
};

const headerMenuBtnSlice = createSlice({
  name: "headerMenuBtn",
  initialState,
  reducers: {
    showHideMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { showHideMenu } = headerMenuBtnSlice.actions;

export default headerMenuBtnSlice.reducer;
