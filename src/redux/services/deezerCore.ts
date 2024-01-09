import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const deezerCoreApi = createApi({
  reducerPath: 'deezerCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3006',
    prepareHeaders: (headers) => {
      headers.set('Content-type', 'application/json')

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/api/v1/get-charts' }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/api/v1/search/${searchTerm}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsBySearchQuery,
} = deezerCoreApi;
