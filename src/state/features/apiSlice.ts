import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constants } from "../../utils/constants";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: constants.API_URL }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getTickers: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: (args) => ({
        url: "/pricemultifull",
        params: { ...args },
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetTickersQuery } = apiSlice;
