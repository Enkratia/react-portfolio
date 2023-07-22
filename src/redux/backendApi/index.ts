import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  HeroContentType,
  MegamenuLinksType,
  TopCategoriesType,
  ProductsType,
  BannersType,
  PopularCategoriesType,
  PostsType,
} from "./types";

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
    getNewArrivals: builder.query<ProductsType, void>({
      query: () => "products?category=new-arrivals",
    }),
    getBanners: builder.query<BannersType, void>({
      query: () => "banners",
    }),
    getPopularCategories: builder.query<PopularCategoriesType, void>({
      query: () => "popular-categories",
    }),
    getTrendingNow: builder.query<ProductsType, void>({
      query: () => "products?category=trending-now",
    }),
    getSale: builder.query<ProductsType, void>({
      query: () => "products?category=sale",
    }),
    getPosts: builder.query<PostsType, void>({
      query: () => "posts",
    }),
  }),
});

export const {
  useGetMegamenuLinksQuery,
  useGetHeroContentQuery,
  useGetTopCategoriesQuery,
  useGetNewArrivalsQuery,
  useGetBannersQuery,
  useGetPopularCategoriesQuery,
  useGetTrendingNowQuery,
  useGetSaleQuery,
  useGetPostsQuery,
} = backendApi;
