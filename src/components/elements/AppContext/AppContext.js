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
    currentSybmol: "",
  };
  const [ticker, setTicker] = useState(initialValue.ticker);
  const [tickerNow, setTickerNow] = useState(initialValue.ticker);
  const [currentSymbol, setCurrentSymbol] = useState(initialValue.currentSybmol);
  const [dataIsHistorical, setDataIsHistorical] = useState(false);

  const value = {
    ticker, 
    setTicker,
    tickerNow,
    setTickerNow,
    currentSymbol,
    setCurrentSymbol,
    dataIsHistorical,
    setDataIsHistorical
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
