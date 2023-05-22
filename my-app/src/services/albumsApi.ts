import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAlbumList: builder.query({
      query: () => {
        return `albums?_start=0&_limit=20`;
      },
    }),
  }),
});

export const { useGetAlbumListQuery } = albumsApi;
