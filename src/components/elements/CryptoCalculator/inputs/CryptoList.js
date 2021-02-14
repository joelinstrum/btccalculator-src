import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../elements/AppContext";

const CryptoList = ({ click }) => {
  const [eth, setETH] = useState("...");
  const [btc, setBTC] = useState("...");
  const [bch, setBCH] = useState("...");
  const [ltc, setLTC] = useState("...");
  const [bnb, setBNB] = useState("...");
  const [ticker] = useContext(AppContext);

  useEffect(() => {
    setETH(ticker.eth);
    setBTC(ticker.btc);
    setBCH(ticker.bch);
    setLTC(ticker.ltc);
    setBNB(ticker.bnb);
  }, [ticker]);

  return (
    <div className="dropdown-list">
      <ul>
        <li onClick={() => click(btc, "Bitcoin", "btc")}>Bitcoin: {btc}</li>
        <li onClick={() => click(eth, "Ethereum", "eth")}>Ethereum: {eth}</li>
        <li onClick={() => click(bch, "Bitcoin Cash", "bch")}>
          Bitcoin cash: {bch}
        </li>
        <li onClick={() => click(ltc, "Litecoin", "ltc")}>Litecoin: {ltc}</li>
        <li onClick={() => click(bnb, "Binance", "bnb")}>Binance: {bnb}</li>
        <li onClick={() => click(null, "Custom")}>Custom</li>
      </ul>
    </div>
  );
};

export default CryptoList;
