import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => "/service/all",
    }),
    getService: builder.query({
      query: ({ id }) => "/service/" + id,
    }),
  }),
});

export const { useGetAllServicesQuery, useGetServiceQuery } = serviceApi;
