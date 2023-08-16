import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductReviewsState } from "./types";

export const sortNames = [
  { name: "newest", property: "date" },
  { name: "oldest", property: "-date" },
  { name: "more likes", property: "like" },
  { name: "more dislikes", property: "dislike" },
  { name: "popular", property: "rating" },
  { name: "unpopular", property: "-rating" },
];

const initialState: ProductReviewsState = {
  sortIndex: 0,
  page: 1,
  limit: 4,
};

const ProductReviewsSlice = createSlice({
  name: "productReview",
  initialState,
  reducers: {
    setReviewsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setReviewsSort: (state, action: PayloadAction<number>) => {
      state.sortIndex = action.payload;
    },
  },
});

export const { setReviewsPage, setReviewsSort } = ProductReviewsSlice.actions;

export default ProductReviewsSlice.reducer;
