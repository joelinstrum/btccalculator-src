import { TickerPrices } from "../../state/features/tickerSlice";

interface IRawData<T> {
  [key: string]: T;
}

export const filterApiData = <T extends Record<string, any>>(
  rawData: IRawData<T>
): ICryptoList => {
  const retObject: IRawData<ICrypto> = {};
  if (!rawData || !rawData.hasOwnProperty("RAW")) {
    return {};
  }
  Object.keys(rawData?.RAW).forEach((key) => {
    const tickerObject = rawData.RAW[key].USD;
    retObject[key] = {
      fullName: key,
      currentPrice: tickerObject.PRICE,
      change: tickerObject.CHANGEHOUR,
      ticker: key,
      marketCap: tickerObject.MKTCAP,
    };
  });
  return retObject;
};

export const setTickerPrices = (
  cryptoList: ICryptoList | undefined
): TickerPrices => {
  let retval: TickerPrices = {
    tickers: {},
  };
  let obj = {};
  if (cryptoList) {
    Object.keys(cryptoList).forEach((key: string) => {
      obj = {
        ...obj,
        ...{
          [key]: cryptoList[key].currentPrice as string,
        },
      };
    });
    retval.tickers = obj;
    return retval;
  }
  return retval;
};
