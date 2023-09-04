import qs from "qs";
// import { sortList } from "../../components";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogState, SortType, FiltersType, ToolbarType } from "./types";

export const sortList: SortType[] = [
  { name: "Popularity", sortProperty: "rating" },
  { name: "High - Low Price", sortProperty: "price" },
  { name: "Low - High Price", sortProperty: "-price" },
  { name: "A - Z order", sortProperty: "-title" },
  { name: "Z - A order", sortProperty: "title" },
];

const params = qs.parse(window.location.search.substring(1));
const sort = sortList.filter((sortItem) => sortItem.sortProperty === params.sort);

export const defaultFilters = {
  type: [],
  size: [],
  color: [],
  material: [],
  brand: [],
  price: [],
};

export const defaultToolbar = {
  page: 1,
  limit: "12",
  sort: sortList[0],
};

const filters = {
  type: params.type || defaultFilters.type,
  size: params.size || defaultFilters.size,
  color: params.color || defaultFilters.color,
  material: params.material || defaultFilters.material,
  brand: params.brand || defaultFilters.brand,
  price: params.price || defaultFilters.price,
} as FiltersType;

const toolbar = {
  page: Number(params.page) || defaultToolbar.page,
  limit: params.limit || defaultToolbar.limit,
  sort: sort[0] || defaultToolbar.sort,
} as ToolbarType;

const initialState: CatalogState = {
  toolbar: toolbar,
  filters: filters,
  coord: 0,
  refetch: {
    isMount: false,
    isRefetch: {}, // новый объект => триггер для useEffect => новый запрос
  },
  isFiltersBC: {}, // новый объект => сранение с useRef.current => отрисовка (BC === breadcrumbs)
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<Record<string, string>>) => {
      let title = action.payload.title;
      const type = action.payload.type;

      if (["clothes", "shoes", "accessories"].includes(title)) title = "type";

      if (state.filters[title].includes(type)) {
        state.filters[title] = state.filters[title].filter((ftype) => ftype !== type);
      } else {
        state.filters[title] = [...state.filters[title], type];
      }
    },
    setPriceType: (state, action: PayloadAction<string[]>) => {
      state.filters.price = action.payload as string[];
    },
    setCoord: (state, action: PayloadAction<number>) => {
      state.coord = action.payload;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.toolbar.sort = action.payload;
    },
    setLimit: (state, action: PayloadAction<string>) => {
      state.toolbar.limit = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.toolbar.page = action.payload;
    },
    resetFilters: (state) => {
      state.filters = {
        type: [],
        size: [],
        color: [],
        material: [],
        brand: [],
        price: [],
      };
    },
    setRefetch: (state) => {
      state.refetch = {
        isMount: false,
        isRefetch: {}, // новый объект => триггер для useEffect => новый запрос
      };

      // state.refetch.isMount = false;
      // state.refetch.isRefetch = {}; // новый объект => триггер для useEffect => новый запрос
    },
    setFiltersBC: (state) => {
      state.isFiltersBC = {};
    },
  },
});

export const {
  setType,
  setPriceType,
  setCoord,
  setSort,
  setLimit,
  setPage,
  resetFilters,
  setRefetch,
  setFiltersBC,
  // setParams,
} = catalogSlice.actions;

export default catalogSlice.reducer;
