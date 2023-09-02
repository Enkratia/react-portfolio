import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { backendApi } from "./backendApi";
import headerMenuBtn from "./headerMenuBtnSlice/slice";
import headerCartBtn from "./headerCartBtnSlice/slice";
import favorite from "./favoriteSlice/slice";
import cart from "./cartSlice/slice";
import log from "./headerLogSlice/slice";
import shipping from "./shippingSlice/slice";
import catalog from "./catalogSlice/slice";
import sizeChart from "./sizeChartBtnSlice/slice";
import modalImageBtn from "./modalImageBtnSlice/slice";
import singleProduct from "./singleProductSlice/slice";
import productReviews from "./productReviewsSlice/slice";
import breadcrumbs from "./breadcrumbsSlice/slice";
import leaveComment from "./leaveCommentSlice/slice";
import auth from "./authSlice/slice";

export const store = configureStore({
  reducer: {
    auth,
    leaveComment,
    breadcrumbs,
    productReviews,
    singleProduct,
    modalImageBtn,
    sizeChart,
    catalog,
    shipping,
    log,
    cart,
    favorite,
    headerMenuBtn,
    headerCartBtn,
    [backendApi.reducerPath]: backendApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
