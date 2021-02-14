import React, { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../";

export default () => {
  const [eth, setETH] = useState("...");
  const [btc, setBTC] = useState("...");
  const [bch, setBCH] = useState("...");
  const [ltc, setLTC] = useState("...");
  const [bnb, setBNB] = useState("...");

  const [ticker, setTicker] = useContext(AppContext);
  const [count, setTimercount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    const endpoint = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,BCH,LTC,BNB&tsyms=USD&extraParams=CryptoCalculator`;
    const headers = {
      "Content-Type": "application-json",
    };
    fetch(endpoint, headers)
      .then((response) => response.json())
      .then((data) => {
        setETH(data.ETH.USD);
        setBTC(data.BTC.USD);
        setBCH(data.BCH.USD);
        setLTC(data.LTC.USD);
        setBNB(data.BNB.USD);
        setTicker({
          eth: data.ETH.USD,
          btc: data.BTC.USD,
          bch: data.BCH.USD,
          ltc: data.LTC.USD,
          bnb: data.BNB.USD,
        });
      });
  }, [count]);

  const updater = () => {
    const _timer = setTimeout(() => {
      setTimercount(countRef.current++);
      updater();
      clearTimeout(_timer);
    }, 10000);
  };

  useEffect(() => {}, [btc, bch, eth, ltc, bnb]);
  useEffect(() => {
    updater();
  }, []);

  const formatter = (price) => {
    if (price) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
    }
  };

  return (
    <div className="ticker-container flex-row">
      <div className="ticker-label">Bitcoin: </div>
      <div className="ticker-value">{formatter(btc)}</div>

      <div className="ticker-label">Ethereum: </div>
      <div className="ticker-value">{formatter(eth)}</div>

      <div className="ticker-label">Bitcoin Cash: </div>
      <div className="ticker-value">{formatter(bch)}</div>

      <div className="ticker-label">Litecoin: </div>
      <div className="ticker-value">{formatter(ltc)}</div>

      <div className="ticker-label">Binance: </div>
      <div className="ticker-value">{formatter(bnb)}</div>
    </div>
  );
};
