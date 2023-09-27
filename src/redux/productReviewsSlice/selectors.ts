import { RootState } from "../store";

export const selectProductReviews = (state: RootState) => state.productReviews;
export const selectProductReviewsRecipient = (state: RootState) => state.productReviews.recipient;
