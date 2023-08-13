import { RootState } from "../store";

export const selectSizeChart = (state: RootState) => state.sizeChart.isShowChart;
