import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { heroContentType, megamenuLinksType, topCategoriesType } from "./types";

export const backendApi = createApi({
  reducerPath: "megamenuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getMegamenuLinks: builder.query<megamenuLinksType, void>({
      query: () => "megamenu",
    }),
    getHeroContent: builder.query<heroContentType, void>({
      query: () => "hero-content",
    }),
    getTopCategories: builder.query<topCategoriesType, void>({
      query: () => "top-categories",
    }),
  }),
});

export const { useGetMegamenuLinksQuery, useGetHeroContentQuery, useGetTopCategoriesQuery } =
  backendApi;
