import qs from "qs";
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

let initState = {
  sortIndex: 0,
  page: 1,
  limit: 4,
  recipient: undefined,
};

if (window.location.search) {
  let sortProperty = "";
  const { sort, order, page } = qs.parse(window.location.search.substring(1));

  if (order && order === "asc") {
    sortProperty = "-" + sort;
  } else {
    sortProperty = sort as string;
  }

  const index = sortNames.findIndex((obj) => {
    return obj.property === sortProperty;
  });

  if (page) {
    initState.page = +page;
  }
  initState.sortIndex = index === -1 ? 0 : index;
}

const initialState: ProductReviewsState = initState;

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
    setRecipient: (state, action: PayloadAction<string | undefined>) => {
      state.recipient = action.payload;
    },
  },
});

export const { setReviewsPage, setReviewsSort, setRecipient } = ProductReviewsSlice.actions;

export default ProductReviewsSlice.reducer;
