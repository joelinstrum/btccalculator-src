import { createSlice } from "@reduxjs/toolkit";

const defaultRoiCard1: IRoiCard = {
  title: "Ethereum Roi Calculator",
  ticker: "eth",
  investment: null,
  purchasePrice: null,
  sellPrice: null,
};

const defaultRoiCard2: IRoiCard = {
  title: "Bitcoin Roi Calculator",
  ticker: "btc",
  investment: null,
  purchasePrice: null,
  sellPrice: null,
};

const defaultRoiCard3: IRoiCard = {
  title: "Cardano Roi Calculator",
  ticker: "ada",
  investment: null,
  purchasePrice: null,
  sellPrice: null,
};

const initialState = {
  roiCards: window.localStorage.getItem("storedRoiCards")
    ? JSON.parse(window.localStorage.getItem("storedRoiCards") || "")
    : ([defaultRoiCard1, defaultRoiCard2, defaultRoiCard3] as IRoiCard[]),
};

const roiCardsSlice = createSlice({
  name: "roiCards",
  initialState,
  reducers: {
    setRoiCards: (state, action) => {
      state.roiCards = action.payload as IRoiCard[];
    },
  },
});

export const { setRoiCards } = roiCardsSlice.actions;
export default roiCardsSlice.reducer;
