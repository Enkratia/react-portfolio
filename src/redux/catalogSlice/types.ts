import { SortPropertyEnum } from "./slice";

interface ObjectKeys {
  [key: string]: string[];
}

interface FiltersType extends ObjectKeys {
  type: string[];
  size: string[];
  color: string[];
  material: string[];
  brand: string[];
  price: string[];
}

export interface SortType {
  name: string;
  sortProperty: SortPropertyEnum;
}

interface ToolbarType {
  page: number;
  limit: string;
  sort: SortType;
}

export interface CatalogState {
  toolbar: ToolbarType;
  filters: FiltersType;
  coord: number;
  isRefetch: {};
  isFiltersBC: {};
}
