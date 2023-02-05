import { createReducer, createAction } from "@reduxjs/toolkit";

export interface TickerPrices {
  tickers: {
    [key: string]: string;
  };
}

const initialState: TickerPrices = {
  tickers: {
    bitcoin: "0",
  },
};

export const tickerPrices = createAction<{ value: TickerPrices }>(
  "tickerPrices"
);

export const tickerPriceSlice = createReducer(initialState, (builder) => {
  builder.addCase(tickerPrices, (state, action) => {
    if (typeof action.payload.value === "object") {
      state.tickers = action.payload.value.tickers;
    }
  });
});
