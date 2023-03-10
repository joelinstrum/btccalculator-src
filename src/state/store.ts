import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../pages/app/features/counter/counterSlice";
import { apiSlice } from "./features/apiSlice";
import { apiSellSlice } from "./features/apiSellSlice";
import modalReducer from "./features/modalSlice";
import cryptoReducer from "./features/selectedCryptosSlice";
import { roiCardsSlice } from "./features/cardSlice";
import { cardTotalsSlice } from "./features/cardTotalsSlice";
import { tickerPriceSlice } from "./features/tickerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSellSlice.reducerPath]: apiSellSlice.reducer,
    modal: modalReducer,
    cryptoReducer,
    roiCardsSlice,
    cardTotalsSlice,
    tickerPriceSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, apiSellSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
