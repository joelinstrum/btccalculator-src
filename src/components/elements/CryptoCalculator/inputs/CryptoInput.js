import React, { useState, useEffect, useContext } from "react";
import CryptoList from "./CryptoList";
import { AppContext } from "../../../elements/AppContext";

export default ({ onClickCurrent, setCrypto, crypto }) => {
  const [showDropdown, setDropdown] = useState();
  const [ticker] = useContext(AppContext);
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [cryptoPrice, setCryptoPrice] = useState(0);

  const clickHandler = (price, cryptoName, symbol) => {
    setDropdown(false);
    onClickCurrent(price, cryptoName, symbol);
    setCurrentSymbol(symbol);
    setCryptoPrice(price);
  };

  useEffect(() => {
    if (ticker[currentSymbol] !== cryptoPrice && cryptoPrice !== 0) {
      setCryptoPrice(ticker[currentSymbol]);
      onClickCurrent(ticker[currentSymbol]);
    }
  }, [ticker, currentSymbol, cryptoPrice]);

  return (
    <div className="flex-row div-spacing-10">
      <div className="left-label">Crypto: </div>
      <div className="input-container-with-dropdown">
        <input
          type="text"
          placeholder="Choose cryptocurrency"
          onChange={(e) => setCrypto(e.target.value)}
          value={crypto}
        />
        <div
          className="arrow-container"
          onClick={() => setDropdown(!showDropdown)}
        >
          <span>&#9662;</span>
        </div>
        {showDropdown && <CryptoList click={clickHandler} />}
      </div>
    </div>
  );
};
