interface ObjectKeys {
  [key: string]: string[];
}

export interface FiltersType extends ObjectKeys {
  type: string[];
  size: string[];
  color: string[];
  material: string[];
  brand: string[];
  price: string[];
}

export interface SortType {
  name: string;
  sortProperty: "rating" | "title" | "-title" | "price" | "-price";
}

export interface ToolbarType {
  page: number;
  limit: string;
  sort: SortType;
}

export interface CatalogState {
  toolbar: ToolbarType;
  filters: FiltersType;
  coord: number;
  // isRefetch: {};
  refetch: {
    isMount: boolean;
    isRefetch: {}; // новый объект => триггер для useEffect => новый запрос
  };
  isFiltersBC: {};
}
