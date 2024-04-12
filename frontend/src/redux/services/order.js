import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    newOrder: builder.mutation({
      query: ({ orderItems, shippingDetails, totalPrice }) => ({
        url: "/order/new",
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: { orderItems, shippingDetails, totalPrice },
      }),
    }),
  }),
});

export const { useNewOrderMutation } = orderApi;
