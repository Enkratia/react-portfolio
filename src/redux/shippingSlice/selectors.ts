import { RootState } from "../store";

export const selectShipping = (state: RootState) => state.shipping.isActiveShip;
