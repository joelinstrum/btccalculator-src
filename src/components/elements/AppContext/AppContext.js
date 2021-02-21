import React, { createContext, useState, useReducer } from "react";
import {useCurrentTicker } from "./AppHooks";

export const AppContext = createContext();

const historicalReducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty
});

export const AppContextProvider = props => {

  const currentTicker = useCurrentTicker();
  const [historicalTickerDate, setHistoricalTickerDate] = useState();
  const [historicalTicker, setHistoricalTicker] = useReducer(historicalReducer, {});

  const value = {
    historicalTickerDate,
    setHistoricalTickerDate,
    currentTicker,
    historicalTicker,
    setHistoricalTicker
  }

  return (
    <AppContext.Provider value={value} >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;

