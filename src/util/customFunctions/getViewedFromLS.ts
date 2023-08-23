export const getViewedFromLS = () => {
  const viewed = localStorage.getItem("recentlyViewed");
  if (viewed) {
    const productids = JSON.parse(viewed);
    return productids;
  }

  return [];
};
