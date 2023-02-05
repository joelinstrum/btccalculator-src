import { createReducer, createAction } from "@reduxjs/toolkit";
import {
  parseNumber,
  getAmountDollarsInvested,
  getTotalReturn,
  getCoins,
} from "../../utils/utilities";

const initialState = {
  totalInvestments: 0,
  totalReturns: 0,
};

export const updateCardTotals = createAction<any>("updateCardTotals");

export const cardTotalsSlice = createReducer(initialState, (builder) => {
  builder.addCase(updateCardTotals, (state, action) => {
    const cards = action.payload as IRoiCard[];
    state.totalInvestments = 0;
    state.totalReturns = 0;
    if (cards?.length) {
      for (let i = 0; i < cards.length; i++) {
        let investmentAmount = parseNumber(
          getAmountDollarsInvested(cards[i].investment, cards[i].purchasePrice)
        );
        state.totalInvestments += investmentAmount;
        let coins: number = parseNumber(
          getCoins(cards[i].investment, cards[i].purchasePrice)
        );
        if (
          cards[i] &&
          cards[i].hasOwnProperty("sellPrice") &&
          cards[i].hasOwnProperty("purchasePrice")
        ) {
          let sellPrice = cards[i].sellPrice;
          let returnVal = getTotalReturn(coins, sellPrice);
          let totalReturns = parseNumber(returnVal || 0);
          state.totalReturns += totalReturns;
        }
      }
    }
  });
});
