import { ProductType } from "../backendApi/types";

export type SetCountCartType1 = {
  hash: string;
  count: string;
};

export type SetCountCartType2 = {
  hash: string;
};

export type CartProductType = {
  hash: string;
  count: string;
  color: string;
  size: string;
  obj: ProductType;
};

export type CartStateType = {
  products: CartProductType[];
};
