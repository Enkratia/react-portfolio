import { ProductRating } from "../../redux/backendApi/types";

export const getStarRating = (ratingObj: ProductRating) => {
  const sumRating = ratingObj[5] + ratingObj[4] + ratingObj[3] + ratingObj[2] + ratingObj[1];
  const topRating = ratingObj[5] + ratingObj[4];
  const percentage = Math.round((topRating / sumRating) * 100);
  const starCount = Math.ceil((topRating / sumRating) * 5);

  return [starCount, topRating, sumRating, percentage];
};
