import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogState, SortType, FiltersType, ToolbarType } from "./types";

export const sortList: SortType[] = [
  { name: "Popularity", sortProperty: "rating" },
  { name: "High - Low Price", sortProperty: "price" },
  { name: "Low - High Price", sortProperty: "-price" },
  { name: "A - Z order", sortProperty: "-title" },
  { name: "Z - A order", sortProperty: "title" },
];

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

const initialState: CatalogState = {
  filters: defaultFilters,
  toolbar: defaultToolbar,
  coord: 0,
  refetch: {
    isMount: true,
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
    setFilters: (state, action: PayloadAction<FiltersType>) => {
      state.filters = action.payload;
    },
    resetFilters: (state) => {
      state.filters = defaultFilters;
    },
    setToolbar: (state, action: PayloadAction<ToolbarType>) => {
      state.toolbar = action.payload;
    },
    resetToolbar: (state) => {
      state.toolbar = defaultToolbar;
    },
    setRefetch: (state) => {
      state.refetch = {
        isMount: false,
        isRefetch: {}, // новый объект => триггер для useEffect => новый запрос
      };
    },
    resetRefetch: (state) => {
      state.refetch = {
        ...state.refetch,
        isMount: true,
      };
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
  setFilters,
  resetFilters,
  setRefetch,
  setToolbar,
  resetToolbar,
  resetRefetch,
  setFiltersBC,
} = catalogSlice.actions;

export default catalogSlice.reducer;
