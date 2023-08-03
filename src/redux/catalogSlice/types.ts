interface ObjectKeys {
  [key: string]: string[];
}

interface FiltersState extends ObjectKeys {
  type: string[];
  size: string[];
  color: string[];
  material: string[];
  brand: string[];
  price: string[];
}

export interface CatalogState {
  filters: FiltersState;
  coord: number;
}
