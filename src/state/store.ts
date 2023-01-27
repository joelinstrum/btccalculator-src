import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../pages/app/features/counter/counterSlice";
import { apiSlice } from "./features/apiSlice";
import modalReducer from "./features/modalSlice";
import cryptoReducer from "./features/selectedCryptosSlice";
import roiCardsReducer from "./features/cardSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    modal: modalReducer,
    cryptoReducer,
    roiCardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
