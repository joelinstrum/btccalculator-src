import { createReducer, createAction } from "@reduxjs/toolkit";

const defaultRoiCard1: IRoiCard = {
  title: "Ethereum Roi Calculator",
  ticker: "eth",
  fullName: "Ethereum",
  investment: "$34,000",
  purchasePrice: null,
  purchasePriceWhen: null,
  sellPrice: null,
  sellPriceWhen: null,
};

const defaultRoiCard2: IRoiCard = {
  title: "Bitcoin Roi Calculator",
  ticker: "btc",
  fullName: "Bitcoin",
  investment: 6,
  purchasePrice: null,
  sellPrice: null,
};

const initialState = {
  roiCards: window.localStorage.getItem("storedRoiCards")
    ? JSON.parse(window.localStorage.getItem("storedRoiCards") || "")
    : ([defaultRoiCard1, defaultRoiCard2] as IRoiCard[]),
};

interface IRoiCardSliceAction {
  property: string;
  index: string | number;
  value: string;
}

export const updateCardProperty =
  createAction<IRoiCardSliceAction>("updateProperty");

export const updateCardProperties =
  createAction<IRoiCardSliceAction[]>("updateProperties");

export const saveRoiCards = createAction("saveRoiCards");
export const removeRoiCard = createAction<{ index: number }>("removeCard");
export const addCard = createAction("addCard");

export const roiCardsSlice = createReducer(initialState, (builder) => {
  builder.addCase(updateCardProperty, (state, action) => {
    state.roiCards[action.payload.index][action?.payload.property] =
      action.payload.value;
  });
  builder.addCase(updateCardProperties, (state, action) => {
    action.payload.forEach((item) => {
      const property = item.property;
      const value = item.value;
      const index = item.index;
      state.roiCards[index][property] = value;
    });
  });
  builder.addCase(saveRoiCards, (state, action) => {
    window.localStorage.setItem(
      "storedRoiCards",
      JSON.stringify(state.roiCards)
    );
  });
  builder.addCase(removeRoiCard, (state, action) => {
    const index = action.payload.index;
    const cards = state.roiCards.filter(
      (card: IRoiCard, i: number) => i !== index
    );
    state.roiCards = cards;
    window.localStorage.setItem("storedRoiCards", JSON.stringify(cards));
  });
  builder.addCase(addCard, (state) => {
    state.roiCards.push(defaultRoiCard1);
  });
});
