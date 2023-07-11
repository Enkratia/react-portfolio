import { configureStore } from "@reduxjs/toolkit";
import { megamenuApi } from "./megamenuSlice";

export const store = configureStore({
  reducer: {
    [megamenuApi.reducerPath]: megamenuApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(megamenuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
