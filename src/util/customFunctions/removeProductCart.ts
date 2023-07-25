import { CartProductType } from "../../redux/cartSlice/types";

export const removeProductCart = (product: CartProductType, cart: CartProductType[]) => {
  const productHash = product.color + product.size + product.obj.title;

  const newCart = cart.filter((cartProduct) => {
    const cartProductHash = cartProduct.color + cartProduct.size + cartProduct.obj.title;
    if (cartProductHash === productHash) {
      return false;
    }

    return true;
  });

  return newCart;
};
