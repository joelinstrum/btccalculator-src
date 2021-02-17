import React, { useState, useEffect, useContext } from "react";
import {
  useSetInvestment,
  useCoinUpdate,
  useTotalReturn,
  useSetProfit,
  useSetFormattedProfit,
  useSetPriceNow
} from "./hooks";

import CryptoInput from "./inputs/CryptoInput";
import ValueInput from "./inputs/ValueInput";
import Roi from "./Roi";

const CryptoCalculator = ({
  closeable,
  id,
  closeClick,
  investment,
  updateInvestment,
}) => {
  const [useCurrentPrice, setUseCurrentPrice] = useState(true);
  const [costPerCoin, setCostPerCoin] = useState(0);
  const [totalInvestment, setTotalInvestment] = useSetInvestment(investment);
  const [futureCost, setFutureCost] = useState(0);
  const [crypto, setCrypto] = useState("");
  const numberOfCoins = useCoinUpdate(costPerCoin, totalInvestment);
  const [currentSymbol, setCurrentSymbol] = useState();
  const [lockInPrice, setLockInPrice] = useState(false);
  const [costFocus, setCostFocus] = useState(false);
  const totalReturn = useTotalReturn(
    costPerCoin,
    totalInvestment,
    futureCost,
    numberOfCoins
  );
  const profit = useSetProfit(totalReturn, totalInvestment, futureCost);
  const [formattedProfit, formattedReturn] = useSetFormattedProfit(
    totalReturn,
    profit
  );

  useSetPriceNow(currentSymbol, futureCost, setFutureCost, useCurrentPrice);

  const onClickCurrent = (price, cryptoName, symbol) => {
    if (price && !lockInPrice && !costFocus) {
      setCostPerCoin(price);
    }
    if (cryptoName) {
      setCrypto(cryptoName);
    }
    if (symbol) {
      setCurrentSymbol(symbol);
    }
  };

  const investmentHandler = (investment) => {
    setTotalInvestment(investment);
    if (updateInvestment) {
      updateInvestment(investment);
    }
  };

  const lockInHandler = () => {
    if(costPerCoin){
      setLockInPrice(!lockInPrice)
    } else {
      alert("You cannot lock in price that is empty")
    }
  }

  const costFocusHandler = (focused) => {
    setCostFocus(focused);
  }

  useEffect(() => {
    setTotalInvestment(investment);
  }, [investment, setTotalInvestment]);

  
  return (
    <div className="flex-row">
      <div className="card-container card-1">
        {closeable && (
          <div className="close" onClick={() => closeClick(id)}>
            <div className="close-x">x</div>
          </div>
        )}

        <CryptoInput
          onClickCurrent={onClickCurrent}
          setCrypto={setCrypto}
          crypto={crypto}
        />

        <ValueInput
          label="Purchase price"
          onChangeHandler={setCostPerCoin}
          value={costPerCoin}
          placeholder={"cost p/coin when purchased"}
          disabled={lockInPrice}
          onFocus={costFocusHandler}
        />

        <div className="flex-row">
          <div className="left-label left-label-undercopy">
            <input type="checkbox" 
                checked={lockInPrice} 
                onChange={ () => lockInHandler()}
              />
            <label>lock in price</label>
          </div>
        </div>

        <ValueInput
          label="Total Investment"
          onChangeHandler={investmentHandler}
          value={closeable ? investment : totalInvestment}
          disabled={closeable}
          placeholder={"ie $25,000"}
        />

        <ValueInput
          label="Price after purchase"
          onChangeHandler={setFutureCost}
          disabled={useCurrentPrice}
          value={futureCost}
          placeholder={"expected future price $"}
        />

        <div className="flex-row">
          <div className="left-label left-label-undercopy">
            <input type="checkbox" 
                checked={useCurrentPrice} 
                onChange={ () => setUseCurrentPrice(!useCurrentPrice)}
              />
            <label>update with latest price</label>
          </div>
        </div>

      </div>

      <Roi
        crypto={crypto}
        numberOfCoins={numberOfCoins}
        formattedProfit={formattedProfit}
        formattedReturn={formattedReturn}
        profit={profit}
      />
    </div>
  );
};

export default CryptoCalculator;
