import { CartProductType } from "../../redux/cartSlice/types";

export const removeProductCart = (product: CartProductType, cart: CartProductType[]) => {
  let productHash = product.obj.title;
  if (product.size) {
    productHash += product.size;
  }
  if (product.color) {
    productHash += product.color;
  }

  const newCart = cart.filter((cartProduct) => {
    let cartProductHash = cartProduct.obj.title;
    if (cartProduct.size) {
      cartProductHash += cartProduct.size;
    }
    if (cartProduct.color) {
      cartProductHash += cartProduct.color;
    }

    if (cartProductHash === productHash) {
      return false;
    }

    return true;
  });

  return newCart;
};
