import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LeaveCommentState } from "./types";

const initialState: LeaveCommentState = {
  recipient: undefined,
};

const leaveCommentSlice = createSlice({
  name: "leaveComment",
  initialState,
  reducers: {
    setRecipient: (state, action: PayloadAction<string | undefined>) => {
      state.recipient = action.payload;
    },
  },
});

export const { setRecipient } = leaveCommentSlice.actions;

export default leaveCommentSlice.reducer;
