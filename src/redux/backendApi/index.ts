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
  PostsCommentType,
  OutletStoresType,
  ContactUsType,
  ContactsFAQType,
  OrderType,
  RegisterType,
  LoginType,
} from "./types";
import { AuthState } from "../authSlice/types";
import { RootState } from "../store";

import { getTokenFromLS } from "../../util/customFunctions";

export const backendApi = createApi({
  reducerPath: "megamenuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-server-vercel-test-eight.vercel.app/",
    // baseUrl: "https://json-server-vercel-portfolio-pi.vercel.app/",
    // baseUrl: "https://master--statuesque-tanuki-db4c10.netlify.app/",
    // baseUrl: "http://localhost:3000/",
    prepareHeaders: (headers, { getState }) => {
      const tokenRTK = (getState() as RootState).auth.accessToken;
      const tokenLS = getTokenFromLS();

      if (tokenRTK || tokenLS) {
        headers.set("authorization", `Bearer ${tokenRTK || tokenLS}`);
      }

      return headers;
    },
  }),
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
    getPosts: builder.query<{ apiResponse: PostsType; totalCount: number }, string>({
      query: (request) => `posts${request}`,
      transformResponse(apiResponse: PostsType, meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get("X-Total-Count")) };
      },
    }),
    getCountries: builder.query<CountriesType, void>({
      query: () => "countries",
    }),
    getCities: builder.query<CitiesType, string>({
      query: (country) => `cities?country=${country}`,
      onQueryStarted: async (_, { queryFulfilled }) => {
        // console.log("status: loading");
        // const test = await queryFulfilled;
        // console.log(test);
      },
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
    getPostsComments: builder.query<
      { apiResponse: PostsCommentType[]; totalCount: number },
      string
    >({
      query: (request) => `posts-comments/${request}`,
      transformResponse(apiResponse: PostsCommentType[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get("X-Total-Count")) };
      },
    }),
    getContactUs: builder.query<ContactUsType[], void>({
      query: () => `contact-us`,
    }),
    getOutletStores: builder.query<OutletStoresType[], void>({
      query: () => `outlet-stores`,
    }),
    getContactsFAQ: builder.query<ContactsFAQType[], void>({
      query: () => `contacts-faq`,
    }),
    getOrder: builder.query<OrderType[], string>({
      query: (number) => `orders?number=${number}`,
    }),

    // **
    postRegister: builder.query<AuthState, RegisterType>({
      query: (userData) => {
        return {
          url: "/register",
          method: "POST",
          body: userData,
        };
      },
    }),
    postLogin: builder.query<AuthState, LoginType>({
      query: (userData) => {
        return {
          url: "/login",
          method: "POST",
          body: userData,
        };
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
  useGetPostsCommentsQuery,
  useGetOutletStoresQuery,
  useGetContactUsQuery,
  useGetContactsFAQQuery,
  useLazyGetOrderQuery,
  // **
  useLazyPostRegisterQuery,
  useLazyPostLoginQuery,
} = backendApi;
