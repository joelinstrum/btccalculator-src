import React, { useState } from "react";
import ls from "local-storage";
import { InputInvestment, InputCrypto, InputPurchasePrice, InputSellPrice } from "./inputs";
import CalculatorRoi from "./CalculatorRoi";
export const CalculatorContext = React.createContext();

const Calculator = ({isCopy, closeClick, id}) => {

  const [investment, setInvestment] = useState(ls.get("investment") || "");
  const [crypto, setCrypto] = useState();

  const investmentHandler = value => {
    setInvestment(value);
    if(!isCopy) { ls.set("investment", value) };
  }

  const cryptoHandler = value => {
    setCrypto(value);
  }

  const [purchasedPrice, setPurchasedPrice] = useState(ls.get("purchasedPrice"));
  const [purchasedCryptoName, setPurchasedCryptoName] = useState(ls.get("purchasedName"));
  const [purchasedSymbol, setPurchasedSymbol] = useState(ls.get("cryptoSymbol"));
  const [useCurrentPrice, setUseCurrentPrice] = useState();
  const [sellPrice, setSellPrice] = useState();

  const value = {
    purchasedPrice,
    setPurchasedPrice,
    purchasedCryptoName,
    setPurchasedCryptoName,
    purchasedSymbol,
    setPurchasedSymbol,
    useCurrentPrice,
    setUseCurrentPrice,
    setSellPrice,
    sellPrice,
    investment,
    isCopy
  }


  return (
    <CalculatorContext.Provider value={ value}>
      <div className="flex-row">
        <div className="calc-left">
          <div className="card-container padding-10 full-width">
            <div className="card-header">ROI Calculator</div>
            <div className="card-text margin-bottom-10">Determine your ROI based on past or current crypto prices</div>
            <InputInvestment value={investment} onChange={investmentHandler} />
            <InputCrypto value={crypto} onChange={cryptoHandler} />
            <InputPurchasePrice />
            <InputSellPrice />
            { isCopy && <div className="calc-close" onClick={() => closeClick(id)}><div>&times;</div></div>}
          </div>
          
        </div>
        <div className='calc-right'>
          <CalculatorRoi />
        </div>
      </div>
    </CalculatorContext.Provider>
  )
}

export default Calculator;