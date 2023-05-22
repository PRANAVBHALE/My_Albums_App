import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAlbumList: builder.query({
      query: (params) => {
        let { start = 0, pageLimit = 20 } = params;

        return `albums?_start=${start}&_limit=${pageLimit}`;
      },
    }),
  }),
});

export const { useGetAlbumListQuery } = albumsApi;
