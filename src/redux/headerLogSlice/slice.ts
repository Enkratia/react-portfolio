import { createSlice } from "@reduxjs/toolkit";
import { HeaderLogState } from "./types";

const initialState: HeaderLogState = {
  isLoginOpen: false,
  isRegisterOpen: false,
};

const headerLogSlice = createSlice({
  name: "headerLog",
  initialState,
  reducers: {
    showHideLogin: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
    showHideRegister: (state) => {
      state.isRegisterOpen = !state.isRegisterOpen;
    },
  },
});

export const { showHideLogin, showHideRegister } = headerLogSlice.actions;

export default headerLogSlice.reducer;
