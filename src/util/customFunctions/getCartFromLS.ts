export const getCartFromLS = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const products = JSON.parse(cart);
    return products;
  }

  return [];
};
