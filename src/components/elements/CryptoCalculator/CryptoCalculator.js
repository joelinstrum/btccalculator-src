import React, { useState, useEffect } from "react";
import {
  useCoinUpdate,
  useTotalReturn,
  useSetProfit,
  useSetFormattedProfit,
} from "./hooks";

import CryptoInput from "./inputs/CryptoInput";
import ValueInput from "./inputs/ValueInput";

const CryptoCalculator = ({ closeable, id, closeClick }) => {
  const [costPerCoin, setCostPerCoin] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [futureCost, setFutureCost] = useState(0);
  const [crypto, setCrypto] = useState("");
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

  const onClickCurrent = (price, cryptoType) => {
    setCostPerCoin(price);
    setCrypto(cryptoType);
  };

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
          label="Current price"
          onChangeHandler={setCostPerCoin}
          value={costPerCoin}
          placeholder={"cost per coin"}
        />

        <ValueInput
          label="Total Investment"
          onChangeHandler={setTotalInvestment}
          value={totalInvestment}
          placeholder={"ie $25,000"}
        />

        <ValueInput
          label="Future price"
          onChangeHandler={setFutureCost}
          value={futureCost}
          placeholder={"expected future price $"}
        />
      </div>

      <div className="card-container card-2">
        <div>
          <span className="title-medium-label">ROI:&nbsp;</span>
          <span className="title-medium-value">{crypto}</span>
        </div>
        <div>
          Number of coins:{" "}
          <span className="span-100 result-1">
            {numberOfCoins && parseFloat(numberOfCoins).toFixed(2)}
          </span>
        </div>
        <div>
          Total Return:{" "}
          <span className="span-100 result-1">
            {totalReturn && `${formattedReturn}`}
          </span>
        </div>
        <div>
          Profit:{" "}
          <span className="span-100 result-2">
            {profit && `${formattedProfit}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CryptoCalculator;
