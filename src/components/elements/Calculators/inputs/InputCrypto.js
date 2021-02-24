import React, { useState, useContext } from "react";
import CryptoList from "./CryptoList";
import { CalculatorContext } from "../Calculator";
import ls from "local-storage";

const InputCrypto = () => {
  const [showDropdown, setDropdown] = useState();
  const { 
    setPurchasedPrice, 
    setPurchasedCryptoName, 
    setPurchasedSymbol, 
    purchasedCryptoName,
    isCopy
  } = useContext(CalculatorContext);
  const clickHandler = (price, cryptoName, symbol) => {
    setDropdown(false);
    setPurchasedPrice(price);
    setPurchasedCryptoName(cryptoName)
    setPurchasedSymbol(symbol)
    if(!isCopy) {
      ls.set("purchasedPrice", price)
      ls.set("purchasedName", cryptoName);
      ls.set("cryptoSymbol", symbol)
    }
    
  };

  const dropdownClick = () => {
    onclick="ga('send', 'event', 'Calculator Click', 'Crypto', 'Displays cryptos to select from')";
    setDropdown(!showDropdown)
  }
  return (
    <div className="form-row margin-bottom-10">
      <div>
        <div className="form-label">CyptoType: </div>
      </div>
      <div>
        <div className="form-value input-container-with-dropdown flex-row-all">
          <input
            placeholder="Bitcoin"
            onChange={e => setPurchasedCryptoName(e.target.value)}
            value={purchasedCryptoName || ""}
          />
          <div
            className={`dropdown-list-container`}
            onClick={dropdownClick}
          >
            <div className="arrow-container">
              <div className={showDropdown ? "arrow-up" : "arrow-down"}>
                <span>&#9662;</span>
              </div>
            </div>
          </div>
          <div
            className={`dropdown-list ${showDropdown ? "dropdown-list-expanded" : "dropdown-list-closed"}`}>
            <CryptoList click={clickHandler} />
          </div>
        </div>
      </div>
    </div>
  )

}

export default InputCrypto;