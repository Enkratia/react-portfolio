import qs from "qs";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogState, SortType, FiltersType, ToolbarType } from "./types";
import { sortList } from "../../components";

const params = qs.parse(window.location.search.substring(1));
const sort = sortList.filter((sortItem) => sortItem.sortProperty === params.sort);

const filters = {
  type: params.type || [],
  size: params.size || [],
  color: params.color || [],
  material: params.material || [],
  brand: params.brand || [],
  price: params.price || [],
} as FiltersType;

const toolbar = {
  page: Number(params.page) || 1,
  limit: params.limit || "12",
  sort: sort[0] || sortList[0],
} as ToolbarType;

const initialState: CatalogState = {
  toolbar: toolbar,
  filters: filters,
  coord: 0,
  isRefetch: {}, // новый объект => триггер для useEffect => новый запрос
  isFiltersBC: {}, // новый объект => сранение с useRef.current => отрисовка (BC === breadcrumbs)
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<Record<string, string>>) => {
      let title = action.payload.title;
      const type = action.payload.type;

      if (title === ("clothes" || "shoes" || "accessories")) title = "type";

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
      state.isRefetch = {};
    },
    setFiltersBC: (state) => {
      state.isFiltersBC = {};
    },
    // setParams: (state, action: PayloadAction<Record<string, FiltersType | ToolbarType>>) => {
    //   state.filters = action.payload.filters as FiltersType;
    //   state.toolbar = action.payload.toolbar as ToolbarType;
    // },
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
