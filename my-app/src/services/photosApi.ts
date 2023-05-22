import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPhotosList: builder.query({
      query: (params) => {
        let { albumid, start, limit } = params;
        return `photos?albumId=${albumid}&_start=${start}&_limit=${limit}`;
      },
    }),
  }),
});

export const { useGetPhotosListQuery } = photosApi;
