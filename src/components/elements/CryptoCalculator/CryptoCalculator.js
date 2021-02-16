import React, { useState, useEffect } from "react";
import {
  useSetInvestment,
  useCoinUpdate,
  useTotalReturn,
  useSetProfit,
  useSetFormattedProfit,
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
  const [costPerCoin, setCostPerCoin] = useState(0);
  const [totalInvestment, setTotalInvestment] = useSetInvestment(investment);
  const [futureCost, setFutureCost] = useState(0);
  const [crypto, setCrypto] = useState("");
  const [symbol, setSymbol] = useState("");
  const numberOfCoins = useCoinUpdate(costPerCoin, totalInvestment);
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

  const onClickCurrent = (price, cryptoName, symbol) => {
    if (price) {
      setCostPerCoin(price);
    }
    if (cryptoName) {
      setCrypto(cryptoName);
    }
  };

  const investmentHandler = (investment) => {
    setTotalInvestment(investment);
    if (updateInvestment) {
      updateInvestment(investment);
    }
  };

  useEffect(() => {
    setTotalInvestment(investment);
  }, [investment]);

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
        />

        <ValueInput
          label="Total Investment"
          onChangeHandler={investmentHandler}
          value={closeable ? investment : totalInvestment}
          disabled={closeable ? true : false}
          placeholder={"ie $25,000"}
        />

        <ValueInput
          label="Price after purchase"
          onChangeHandler={setFutureCost}
          value={futureCost}
          placeholder={"expected future price $"}
        />
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
