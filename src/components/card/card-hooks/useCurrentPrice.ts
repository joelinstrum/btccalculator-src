import { useContext, useEffect, useState } from "react";
import AppContext from "pages/app/AppContext";
import { IContext } from "pages/app/AppContext";

const useCurrentPrice = (ticker: string) => {
  const { tickers } = useContext(AppContext) as IContext;
  const [currentPrice, setCurrentPrice] = useState("");

  useEffect(() => {
    if (tickers && tickers.hasOwnProperty(ticker)) {
      setCurrentPrice(tickers[ticker].currentPrice as string);
    }
  }, [tickers, ticker]);

  return currentPrice;
};

export default useCurrentPrice;
