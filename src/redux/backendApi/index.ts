import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HeroContentType, MegamenuLinksType, TopCategoriesType, NewArrivalsType } from "./types";

export const backendApi = createApi({
  reducerPath: "megamenuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getMegamenuLinks: builder.query<MegamenuLinksType, void>({
      query: () => "megamenu",
    }),
    getHeroContent: builder.query<HeroContentType, void>({
      query: () => "hero-content",
    }),
    getTopCategories: builder.query<TopCategoriesType, void>({
      query: () => "top-categories",
    }),
    getNewArrivals: builder.query<NewArrivalsType, void>({
      query: () => "products?category=new-arrivals",
    }),
  }),
});

export const {
  useGetMegamenuLinksQuery,
  useGetHeroContentQuery,
  useGetTopCategoriesQuery,
  useGetNewArrivalsQuery,
} = backendApi;
