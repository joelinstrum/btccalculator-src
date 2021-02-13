import React, { useState } from "react";
import CryptoList from "./CryptoList";

export default ({ onClickCurrent, setCrypto, crypto }) => {
  const [showDropdown, setDropdown] = useState();

  const clickHandler = (price, cryptoPrice) => {
    setDropdown(false);
    onClickCurrent(price, cryptoPrice);
  };
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
