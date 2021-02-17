import { useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

export function useSetInvestment(investment) {
  const [totalInvestment, setTotalInvestment] = useState(investment);
  useEffect(() => {
    setTotalInvestment(totalInvestment);
  }, [totalInvestment]);
  return [totalInvestment, setTotalInvestment];
}

export function useCoinUpdate(costPerCoin, totalInvestment) {
  const [numberOfCoins, setNumberOfCoins] = useState(0);

  useEffect(() => {
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

export function useSetFormattedProfit(totalReturn, profit) {
  const [formattedProfit, setFormattedProfit] = useState(0);
  const [formattedReturn, setFormattedReturn] = useState(0);

  useEffect(() => {
    if (totalReturn) {
      setFormattedReturn(
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalReturn.replace(/[^0-9.]/, ""))
      );
    } else {
      setFormattedReturn(0);
    }
    if (profit) {
      let formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(profit.replace(/[^0-9.-]/, ""));
      if (profit < 0) {
        setFormattedProfit(`-${formatted.replace(/-/, "")}`);
      } else {
        setFormattedProfit(`${formatted}`);
      }
    } else {
      setFormattedProfit(0);
    }
  }, [totalReturn, profit]);
  return [formattedProfit, formattedReturn];
}

export function useSetPriceNow(currentSymbol, futureCost, setFutureCost, useCurrentPrice ){
  const { tickerNow } = useContext(AppContext);
  useEffect(() => {
    if(useCurrentPrice){
      setFutureCost(tickerNow[currentSymbol])
    }
    
  }, [currentSymbol, tickerNow, futureCost, setFutureCost, useCurrentPrice]);
}
