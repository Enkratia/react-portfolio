import { RootState } from "../store";

export const selectModalImage = (state: RootState) => state.modalImageBtn.isActiveMI;
