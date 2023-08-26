import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BreadcrumbsState } from "./types";

const initialState: BreadcrumbsState = {
  title: undefined,
};

const breadcrumbsSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadcrumbsTitle: (state, action: PayloadAction<string | undefined>) => {
      state.title = action.payload;
    },
  },
});

export const { setBreadcrumbsTitle } = breadcrumbsSlice.actions;

export default breadcrumbsSlice.reducer;
