import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const initialValue = {
    ticker: {
      btc: 0,
      bch: 0,
      eth: 0,
      ltc: 0,
      bnb: 0,
    },
  };
  const [ticker, setTicker] = useState(initialValue.ticker);
  const [tickerNow, setTickerNow] = useState(initialValue.ticker);

  return (
    <AppContext.Provider value={[ticker, setTicker, tickerNow, setTickerNow]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
