import { useState, useRef, useEffect, useContext, useMemo } from "react";
import { AppContext } from "../";

const api = "https://min-api.cryptocompare.com/data";

export function useHistorical(date) {
  const [isUsingHistorical, setIsUsingHistorical] = useState();
  useEffect((date) => {
    setIsUsingHistorical(isDateHistorical(date));
  });
  return isUsingHistorical;
}

export function useApiFetch(date) {
  let timer;
  const [ticker, setTicker] = useContext(AppContext);
  const [eth, setETH] = useState("...");
  const [btc, setBTC] = useState("...");
  const [bch, setBCH] = useState("...");
  const [ltc, setLTC] = useState("...");
  const [bnb, setBNB] = useState("...");
  const [count, setTimercount] = useState(0);
  const countRef = useRef(count);

  const updateTickerData = () => {
    timer = setTimeout(() => {
      if (isDateHistorical(selectedDate)) {
        clearTimeout(timer);
      } else {
        setTimercount(countRef.current++);
        updateTickerData();
      }
    }, 10000);
  };

  useEffect(() => {
    setSelectedDate(date);
    if (!isDateHistorical(date)) {
      clearTimeout(timer);
      setTimercount(countRef.current++);
      updateTickerData();
    } else {
      clearTimeout(timer);
    }
  }, [date]);

  useEffect(async () => {
    const today = new Date(Date.now()).toLocaleString().split(",")[0];
    const selectedDate = new Date(date).toLocaleString().split(",")[0];
    if (selectedDate !== today) {
      setData();
      const data = await getTickersFromDate(selectedDate);
      setData(data);
    }
  }, [date]);

  const setData = (data) => {
    setETH(data ? data.ETH.USD : "...");
    setBTC(data ? data.BTC.USD : "...");
    setBCH(data ? data.BCH.USD : "...");
    setLTC(data ? data.LTC.USD : "...");
    setBNB(data ? data.BNB.USD : "...");
    setTicker({
      eth: data ? data.ETH.USD : "...",
      btc: data ? data.BTC.USD : "...",
      bch: data ? data.BCH.USD : "...",
      ltc: data ? data.LTC.USD : "...",
      bnb: data ? data.BNB.USD : "...",
    });
  };

  useEffect(() => {
    const endpoint = `${api}/pricemulti?fsyms=ETH,BTC,BCH,LTC,BNB&tsyms=USD&extraParams=CryptoCalculator&ts=1605549600`;
    const headers = {
      "Content-Type": "application-json",
    };
    fetch(endpoint, headers)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [count]);

  return { eth, btc, bch, ltc, bnb };
}

export function useToggleDisplayDate(date = new Date(Date.now())) {
  const [historicalText, setHistoricalText] = useState("");
  useEffect(() => {
    const selectDate = new Date(date).toLocaleString().split(",")[0];
    if (isDateHistorical(selectDate)) {
      setHistoricalText("Select a different date");
    } else {
      setHistoricalText("Use data from a previous date");
    }
  }, [date]);

  return historicalText;
}

const isDateHistorical = (date) => {
  const today = new Date(Date.now()).toLocaleString().split(",")[0];
  const selectedDate = new Date(date).toLocaleString().split(",")[0];
  return today !== selectedDate;
};

const getTickersFromDate = (strDate) => {
  return new Promise(async (success) => {
    const datum = Date.parse(strDate);
    const timestamp = datum / 1000;
    const symbols = {
      ETH: { USD: 0 },
      BTC: { USD: 0 },
      BCH: { USD: 0 },
      LTC: { USD: 0 },
      BNB: { USD: 0 },
    };
    let keys = Object.keys(symbols);
    for (let i = 0; i < keys.length; i++) {
      const symbol = keys[i];
      const value = await tickerFetch(symbol, timestamp);
      symbols[symbol] = value[symbol];
    }
    return success(symbols);
  });
};

const tickerFetch = (symbol, timestamp) => {
  const endpoint = `${api}/pricehistorical?fsym=${symbol}&tsyms=USD&ts=${timestamp}&extraParams=CryptoCalculator`;
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data);
};

let selectedDate;

const setSelectedDate = (d) => {
  selectedDate = d;
  console.log(selectedDate);
};

const getSelectedDate = () => {
  return selectedDate;
};
