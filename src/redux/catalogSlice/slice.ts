import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CatalogState, SortType } from "./types";

export enum SortPropertyEnum {
  POPULARITY_DESC = "rating",
  TITLE_ASC = "title",
  TITLE_DESC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

const initialState: CatalogState = {
  toolbar: {
    page: 1,
    limit: "12",
    sort: {
      name: "Popularity",
      sortProperty: SortPropertyEnum.POPULARITY_DESC,
    },
  },
  filters: {
    type: [],
    size: [],
    color: [],
    material: [],
    brand: [],
    price: [],
  },
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

      // state.coord = action.payload.coord as number;
    },
    setPriceType: (state, action: PayloadAction<string[]>) => {
      state.filters.price = action.payload as string[];
      // state.coord = action.payload.coord as number;
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
} = catalogSlice.actions;

export default catalogSlice.reducer;
