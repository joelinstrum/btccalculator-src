import { createReducer, createAction } from "@reduxjs/toolkit";
import defaultCards from "models/defaultCards";
import { getInitialCards } from "utils/utilities";

const initialState = {
  roiCards: getInitialCards(),
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
export const revertRoiCards = createAction("revertRoiCards");
export const removeRoiCard = createAction<{ index: number }>("removeCard");
export const copyRoiCard = createAction<{ index: number }>("copyRoiCard");
export const addCard = createAction("addCard");
export const addSampleCards = createAction("addSampleCards");
export const addCardsFromQueryString = createAction<IRoiCard[] | any>(
  "addCardsFromQueryString"
);

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
  builder.addCase("revertRoiCards", (state) => {
    const roiCards: IRoiCard[] = window.localStorage.getItem("storedRoiCards")
      ? JSON.parse(window.localStorage.getItem("storedRoiCards") || "")
      : ([
          defaultCards.defaultRoiCard1,
          defaultCards.defaultRoiCard2,
        ] as IRoiCard[]);
    roiCards.forEach((card) => (card.revertedDate = Date.now()));
    state.roiCards = roiCards;
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
    state.roiCards.push(defaultCards.defaultRoiCard1);
  });
  builder.addCase(addSampleCards, (state) => {
    state.roiCards.push(defaultCards.defaultRoiCard1);
    state.roiCards.push(defaultCards.defaultRoiCard2);
  });
  builder.addCase(copyRoiCard, (state, action) => {
    const cardToCopy = state.roiCards[action.payload.index];
    const newCard = {
      ...cardToCopy,
      ...{ title: `${cardToCopy.title} (copy)` },
    };
    state.roiCards.push(newCard);
  });
  builder.addCase(addCardsFromQueryString, (state, action) => {
    console.log(action.payload);
  });
});
