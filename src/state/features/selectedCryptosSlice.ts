import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCryptos: window.localStorage.getItem("storedTickers")
    ? JSON.parse(window.localStorage.getItem("storedTickers") || "")
    : ["ETH", "BTC", "XRP", "ADA", "BNB"],
};

const selectedCryptoSlice = createSlice({
  name: "selectedCryptos",
  initialState,
  reducers: {
    setSelectedCryptos: (state, action) => {
      state.selectedCryptos = action.payload;
      window.localStorage.setItem(
        "storedTickers",
        JSON.stringify(action.payload)
      );
    },
  },
});

export const { setSelectedCryptos } = selectedCryptoSlice.actions;
export default selectedCryptoSlice.reducer;
