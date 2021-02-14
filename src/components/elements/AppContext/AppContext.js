import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const initialValue = {
    ticker: {
      btc: 40000,
      bch: 500,
      eth: 1800,
      ltc: 450,
      bnb: 400,
    },
  };
  const [ticker, setTicker] = useState(initialValue.ticker);

  return (
    <AppContext.Provider value={[ticker, setTicker]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
