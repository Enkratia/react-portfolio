import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveMI: false,
};

const modalImageBtnSlice = createSlice({
  name: "modalImageBtn",
  initialState,
  reducers: {
    setIsActiveMI: (state) => {
      state.isActiveMI = !state.isActiveMI;
    },
  },
});

export const { setIsActiveMI } = modalImageBtnSlice.actions;

export default modalImageBtnSlice.reducer;
