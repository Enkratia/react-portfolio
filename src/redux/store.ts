import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { megamenuApi } from "./megamenuSlice/slice";
import headerMenuBtn from "./headerMenuBtnSlice/slice";

export const store = configureStore({
  reducer: {
    headerMenuBtn,
    [megamenuApi.reducerPath]: megamenuApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(megamenuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
