import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://health-care-backend-lac.vercel.app/api/v1/`,
  }),
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => `doctor`,
    }),
  }),
});

export const { useGetDoctorsQuery } = apiSlice;
