import { RootState } from "../store";

export const selectCatalog = (state: RootState) => state.catalog;
export const selectCatalogFilters = (state: RootState) => state.catalog.filters;
export const selectCatalogToolbar = (state: RootState) => state.catalog.toolbar;
