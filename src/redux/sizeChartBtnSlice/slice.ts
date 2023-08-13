import { createSlice } from "@reduxjs/toolkit";

type sizeChartBtnState = {
  isShowChart: boolean;
};

const initialState: sizeChartBtnState = {
  isShowChart: false,
};

const sizeChartBtnSlice = createSlice({
  name: "sizeChart",
  initialState,
  reducers: {
    showHideChart: (state) => {
      state.isShowChart = !state.isShowChart;
    },
  },
});

export const { showHideChart } = sizeChartBtnSlice.actions;

export default sizeChartBtnSlice.reducer;
