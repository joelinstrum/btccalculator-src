import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "./Calculator";
import { useCoinUpdate, useTotalReturn, useSetProfit, formatCurrency, useIsProfit } from "./hooks";

const ProfitLoss = ({isProfit, profitOrLoss}) => {
  if(isProfit) {
    return (
      <div className="roi-row roi-label">
        <div><span className="profit-emoji">:-)</span><span>Profit:</span></div> 
        <div className="roi-isProfit">{ formatCurrency(profitOrLoss) }</div>
      </div>
    )
  } else {
    return (
    <div className="roi-row roi-label">
        <div><span className="loss-emoji">:-(</span><span>Loss</span></div> 
        <div className="roi-isLoss">{ formatCurrency(profitOrLoss) }</div>
      </div>
    )
  }
}

const CalculatorRoi = () => {

  const { purchasedPrice, investment, sellPrice, purchasedCryptoName } = useContext(CalculatorContext);
  const numberOfCoins = useCoinUpdate(purchasedPrice, investment);
  const totalReturn = useTotalReturn(
    purchasedPrice,
    investment,
    sellPrice,
    numberOfCoins
  );
  const profitOrLoss = useSetProfit(totalReturn, investment, sellPrice)
  const isProfit = useIsProfit(profitOrLoss);

  return (
    <div className="calc-right-content">
      <div className="calc-rio-heading">
        <div>Return on Investment</div>
        <div />
      </div>

      <div className="roi-row roi-label">
        <div>Crypto: </div>
        <div>{ purchasedCryptoName }</div>
      </div>

      <div className="roi-row roi-label">
        <div># of coins:</div>
        <div>{ numberOfCoins }</div>
      </div>

      <div className="roi-row roi-label">
        <div>Total return:</div>
        <div>{ formatCurrency(totalReturn) }</div>
      </div>

      <ProfitLoss isProfit={isProfit} profitOrLoss={profitOrLoss} />
      
    </div>)
}

export default CalculatorRoi;