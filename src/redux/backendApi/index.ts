import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { heroContentType, megamenuLinksType } from "./types";

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
  }),
});

export const { useGetMegamenuLinksQuery, useGetHeroContentQuery } = backendApi;
