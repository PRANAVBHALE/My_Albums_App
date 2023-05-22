import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getPhotosList: builder.query({
      query: (params) => {
        let { albumid, start, pageLimit } = params;
        return `photos?albumId=${albumid}&_start=${start}&_limit=${pageLimit}`;
      },
    }),
  }),
});

export const { useGetPhotosListQuery } = photosApi;
