import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type User = void;

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getUsersList: builder.query<User, void>({
      query: () => `users`,
    }),
  }),
});

export const { useGetUsersListQuery } = usersApi;
