export const getFavoriteFromLS = () => {
  const favorite = localStorage.getItem("favorite");
  if (favorite) {
    const productids = JSON.parse(favorite);
    return productids;
  }

  return [];
};
