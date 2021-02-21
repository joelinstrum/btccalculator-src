import { useState, useEffect, useReducer, useContext } from "react";
import { pause, toTimestamp } from "../../../utils";
import { AppContext } from "../AppContext";

const api = "https://min-api.cryptocompare.com/data";

const tickerInit = {
  btc: "...",
  eth: "...",
  bch: "...",
  bnb: "...",
  ltc: "..."
}

const historicalTickerInit = {
  btc: { value: "...", diff: 0},
  bch: { value: "...", diff: 0},
  eth: { value: "...", diff: 0},
  bnb: { value: "...", diff: 0},
  ltc: { value: "...", diff: 0},
}

export const useCurrentTicker = () => {

  const [ticker, setTicker] = useState(tickerInit);

  useEffect(() => {
    const fetchTicker = async () => {
      const tickerObject = await fetchTickerData();
      setTicker(tickerObject);
      await pause(10000);
      fetchTicker();
    }
    fetchTicker();
  }, []);

  return ticker;
}

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty
});

export const useHistoricalTicker = (date) => {
  
  const [state, dispatch] = useReducer(reducer, historicalTickerInit)
  const { setHistoricalTicker, currentTicker } = useContext(AppContext);

  useEffect( () => {
    const data = tickerInit;
    dispatch(data);
    const getTickersFromDate = async() => {
      const symbols = Object.keys(tickerInit);
      for(let i=0; i<symbols.length; i++) {
        const symbol = symbols[i];
        const value = await historicalFetch(symbol, date);
        const diff = getDiff(currentTicker[symbol], value)
        dispatch({ [symbol]: { value, diff  }})
        setHistoricalTicker({ [symbol]: { value, diff  }});
      }
    }
    getTickersFromDate();
  }, [date, setHistoricalTicker, currentTicker ]);
  return state;
}

const fetchTickerData = () => {
  const endpoint = `${api}/pricemulti?fsyms=ETH,BTC,BCH,LTC,BNB&tsyms=USD&extraParams=CryptoCalculator&ts=1605549600`;
  const headers = {
    "Content-Type": "application-json",
  };
  return fetch(endpoint, headers)
    .then((response) => response.json())
    .then((data) => {
      return {
        eth: data ? data.ETH.USD : "...",
        btc: data ? data.BTC.USD : "...",
        bch: data ? data.BCH.USD : "...",
        ltc: data ? data.LTC.USD : "...",
        bnb: data ? data.BNB.USD : "...",
      }
    });
}

const historicalFetch = (symbol, date) => {
  if(!date){ return "..."}
  const timestamp = toTimestamp(date);
  const endpoint = `${api}/pricehistorical?fsym=${symbol}&tsyms=USD&ts=${timestamp}&extraParams=CryptoCalculator`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data[symbol.toUpperCase()].USD);
}


const getDiff = (currentTickerValue, histTickerValue) => {
  let pct;
  if(currentTickerValue > histTickerValue ) {
     pct = (100 - (histTickerValue / currentTickerValue * 100)).toFixed(2);
  } else {
    pct = "-" + (100 - (currentTickerValue / histTickerValue * 100)).toFixed(2);
  }
  return pct;
}