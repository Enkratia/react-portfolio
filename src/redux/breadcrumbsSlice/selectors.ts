import { RootState } from "../store";

export const selectBCTitle = (state: RootState) => state.breadcrumbs.title;
