import { ProductType } from "../backendApi/types";

export type CartProductType = {
  color: string;
  size: string;
  obj: ProductType;
};

export type CartStateType = {
  products: CartProductType[];
};
