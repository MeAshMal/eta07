import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    chartStats: builder.query({
      query: () => ({
        url: "/dashboard/chart-stats",
        credentials: "include",
      }),
    }),
    dashboardStats: builder.query({
      query: () => ({
        url: "/dashboard/dashboard-stats",
        credentials: "include",
      }),
    }),
  }),
});

export const { useChartStatsQuery, useDashboardStatsQuery } = dashboardApi;
