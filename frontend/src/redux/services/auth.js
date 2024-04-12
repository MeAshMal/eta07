import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  endpoints: (builder) => ({
    signInWithSocial: builder.mutation({
      query: ({ name, email, imageUrl }) => ({
        url: "/auth/signin-with-social",
        body: { name, email, imageUrl },
        method: "POST",
        credentials: "include",
      }),
    }),
    getMyDetails: builder.query({
      query: () => ({
        url: "/auth/me",
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        credentials: "include",
        method: "GET",
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: ({ email, password, name }) => ({
        url: "/auth/register",
        method: "POST",
        body: {
          email,
          password,
          name,
        },
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useSignInWithSocialMutation,
  useGetMyDetailsQuery,
  useLogoutMutation,
  useLoginMutation,
  useRegisterMutation,
} = authApi;
