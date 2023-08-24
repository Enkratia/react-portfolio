import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  HeroContentType,
  MegamenuLinksType,
  TopCategoriesType,
  ProductsType,
  BannersType,
  PopularCategoriesType,
  PostsType,
  CountriesType,
  CitiesType,
  ShippingMethods,
  ProductReviewType,
  CompleteLookType,
  UsersOrdersType,
} from "./types";

export const backendApi = createApi({
  reducerPath: "megamenuApi",
  tagTypes: ["Catalog"],
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
      query: () => "products?group=new-arrivals",
    }),
    getBanners: builder.query<BannersType, void>({
      query: () => "banners",
    }),
    getPopularCategories: builder.query<PopularCategoriesType, void>({
      query: () => "popular-categories",
    }),
    getTrendingNow: builder.query<ProductsType, void>({
      query: () => "products?group=trending-now",
    }),
    getSale: builder.query<ProductsType, void>({
      query: () => "products?group=sale",
    }),
    getPosts: builder.query<PostsType, string>({
      query: (request) => `posts${request}`,
    }),
    getCountries: builder.query<CountriesType, void>({
      query: () => "countries",
    }),
    getCities: builder.query<CitiesType, string>({
      query: (country) => `cities?country=${country}`,
    }),
    getShippingMethods: builder.query<ShippingMethods, void>({
      query: () => "shipping-methods",
    }),
    getAllCatalogProducts: builder.query<ProductsType, string>({
      query: (request) => `products${request}`,
    }),
    getCatalogProducts: builder.query<{ apiResponse: ProductsType; totalCount: number }, string>({
      query: (request) => `products${request}`,
      transformResponse(apiResponse: ProductsType, meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get("X-Total-Count")) };
      },
    }),
    getProductReviewsById: builder.query<
      { apiResponse: ProductReviewType[]; totalCount: number },
      string
    >({
      query: (request) => `product-reviews${request}`,
      transformResponse(apiResponse: ProductReviewType[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get("X-Total-Count")) };
      },
    }),
    getCompleteLook: builder.query<CompleteLookType[], string>({
      query: (id) => `complete-look?productIds_like=${id}&_start=0&_limit=1`,
    }),
    getUserOrders: builder.query<{ apiResponse: UsersOrdersType[]; totalCount: number }, string>({
      query: (email) => `${email}`,
      transformResponse(apiResponse: UsersOrdersType[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get("X-Total-Count")) };
      },
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
  useGetCountriesQuery,
  useGetCitiesQuery,
  useGetShippingMethodsQuery,
  useGetAllCatalogProductsQuery,
  useGetCatalogProductsQuery,
  useLazyGetCatalogProductsQuery,
  useLazyGetAllCatalogProductsQuery,
  useGetProductReviewsByIdQuery,
  useGetCompleteLookQuery,
  useGetUserOrdersQuery,
} = backendApi;
