import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { megamenuApiType } from "./types";

export const megamenuApi = createApi({
  reducerPath: "megamenuApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getMegamenuLinks: builder.query<megamenuApiType, void>({
      query: () => "megamenu",
    }),
  }),
});

export const { useGetMegamenuLinksQuery } = megamenuApi;
