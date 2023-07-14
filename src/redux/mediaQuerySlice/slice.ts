import { createSlice } from "@reduxjs/toolkit";
import { mediaQuerySliceState } from "./types";

const initialState: mediaQuerySliceState = {
  mq1024: true,
};

const mdq1024 = window.matchMedia("(min-width: 1024px)");

const mediaQuerySlice = createSlice({
  name: "mediaQuery",
  initialState,
  reducers: {
    checkMQ1024(state) {
      if (mdq1024.matches) {
        state.mq1024 = true;
      } else {
        state.mq1024 = false;
      }
    },
  },
});

export const { checkMQ1024 } = mediaQuerySlice.actions;

export default mediaQuerySlice.reducer;
