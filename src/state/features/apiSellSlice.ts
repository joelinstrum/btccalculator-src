import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { constants } from "../../utils/constants";

// Define our single API slice object
export const apiSellSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "apiSell",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: constants.API_URL }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    getTickers: builder.query({
      query: (args) => ({
        url: "/pricemultifull",
        params: { ...args },
      }),
    }),
    getHistoricalPrice: builder.query({
      query: (args) => ({
        url: `/pricehistorical`,
        params: { ...args },
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetTickersQuery,
  useLazyGetHistoricalPriceQuery,
  useLazyGetTickersQuery,
} = apiSellSlice;
