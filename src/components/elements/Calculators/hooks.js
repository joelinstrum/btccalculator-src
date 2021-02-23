import {useEffect, useState } from "react";

export function useCoinUpdate(costPerCoin, totalInvestment) {
  const [numberOfCoins, setNumberOfCoins] = useState(0);

  useEffect(() => {
    console.log(costPerCoin, totalInvestment);
    let n;
    if (costPerCoin && totalInvestment) {
      let costPerCoinStr = costPerCoin.toString();
      n = parseFloat(
        totalInvestment.replace(/[^0-9.]/g, "") /
          costPerCoinStr.replace(/[^0-9.]/g, "")
      ).toFixed(6);
      setNumberOfCoins(n);
    } else {
      setNumberOfCoins(0);
    }
  }, [costPerCoin, totalInvestment]);
  return numberOfCoins;
}

export function useTotalReturn(
  costPerCoin,
  totalInvestment,
  futureCost,
  numberOfCoins
) {
  const [totalReturn, setTotalReturn] = useState(0);
  useEffect(() => {
    if (costPerCoin && totalInvestment && futureCost && numberOfCoins) {
      const returnValue = parseFloat(
        numberOfCoins.toString().replace(/[^0-9.]/, "") *
          futureCost.toString().replace(/[^0-9.]/g, "")
      ).toFixed(2);
      setTotalReturn(returnValue);
    } else if (costPerCoin && totalInvestment) {
      setTotalReturn(totalInvestment.replace(/[^0-9.]/g, ""));
    } else {
      setTotalReturn(0);
    }
  }, [costPerCoin, totalInvestment, futureCost, numberOfCoins]);
  return totalReturn;
}

export function useIsProfit(profitOrLoss) {
  const [isProfit, setIsProfit] = useState();
  useEffect( () => {
    setIsProfit(profitOrLoss > 0)
  }, [profitOrLoss]);
  return isProfit;
}

export function useSetProfit(totalReturn, totalInvestment, futureCost) {
  const [profit, setProfit] = useState(0);
  useEffect(() => {
    if (futureCost && totalInvestment && totalReturn) {
      const returnValue = parseFloat(
        totalReturn.replace(/[^0-9.]/g, "") -
          totalInvestment.replace(/[^0-9.]/g, "")
      ).toFixed(2);
      setProfit(returnValue);
    } else {
      setProfit(0);
    }
  }, [totalReturn, totalInvestment, futureCost]);
  return profit;
}

export function formatCurrency(amount) {
  if(amount && typeof(amount) == "string") {
    console.log("Amount: ", amount)
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount.replace(/[^0-9.]/, ""))
  }
}