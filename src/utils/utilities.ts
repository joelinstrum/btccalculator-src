import { cryptos } from "../models";
import { constants } from "./constants";

export const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US");
};

export const formatPrice = (price: string | number) => {
  try {
    let _price = price.toString().replace(/$|\s/, "");
    let [_left, _right] = _price.split(".");
    if (!_left && !_right) {
      return price;
    }
    if (_left.length > 1) {
      if (_right && _right.length > 1) {
        _right = _right.slice(0, 2);
      }
    } else if (_right && _right.length > 3) {
      _right = _right.slice(0, 4);
    }
    _right = _right.padEnd(2, "0");
    _left = parseInt(_left).toLocaleString("en-US");
    return `$${_left}.${_right}`;
  } catch (e) {
    return price;
  }
};

export const getCryptoObject = (ticker: string): ICrypto => {
  const _ticker = ticker.toUpperCase();
  if (cryptos.hasOwnProperty(_ticker)) {
    return cryptos[_ticker];
  }
  return {
    fullName: "n/a",
    ticker: "",
    currentPrice: null,
  };
};

export const getDateFrom = (from: string | undefined = ""): string => {
  // let d = new Date();
  // let newDate = d.setDate(d.getDate() - daysAgo(from));
  var d = new Date();
  d.setDate(d.getDate() - daysAgo(from));
  let newDate = d.toLocaleDateString();
  // this is a dummy comment
  return newDate;
};

export const dateFromTimestamp = (timestamp: number) => {
  var d = new Date(timestamp * 1000);
  return d.toLocaleDateString();
};

export const cryptoFromDateOptions = (
  startYear: number
): { [key: string]: string } => {
  let fromString = JSON.stringify(constants.DATE_FROM);
  let from = JSON.parse(fromString);
  let currentYear = new Date().getFullYear();
  const n = currentYear - startYear;
  for (let i = 2; i <= n; i++) {
    from = {
      ...from,
      ...{ [`H${i}`]: `${i} years ago (${currentYear - i})` },
    };
  }
  return from;
};

export const daysAgo = (from: string): number => {
  let _from = from.replace(/[^0-9.]/gm, "");
  return 365 * parseFloat(_from);
};

export const getTimestamp = (from?: string): number => {
  if (!from) {
    return Math.floor(Date.now() / 1000);
  }
  if (typeof from === "string") {
    const datum = Date.parse(from);
    return datum / 1000;
  }
  return Math.floor(Date.now() / 1000);
};

export const extractPriceFromData = (data: any): string => {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      return data[key].USD;
    }
  }
  return "";
};

/* Calculator data */
export const getAmountDollarsInvested = (
  investedAmount?: string | number | undefined | null,
  purchasePrice?: string | number | undefined | null
): string => {
  if (!investedAmount || !purchasePrice) {
    return "";
  }
  if (isCurrency(investedAmount)) {
    return investedAmount.toString();
  }
  if (investedAmount && purchasePrice) {
    let investedAmountNumber = parseNumber(investedAmount);
    let purchasePriceNumber = parseNumber(purchasePrice);
    let n = investedAmountNumber * purchasePriceNumber;
    return formatCurrency(n);
  }
  return "";
};

export const getCoins = (
  investedAmount?: string | number | undefined | null,
  purchasePrice?: string | number | undefined | null
): string => {
  let purchasePriceNumber = parseNumber(purchasePrice || "0");
  let investedAmountNumber;
  if (investedAmount && !isCurrency(investedAmount)) {
    return investedAmount.toString();
  }
  if (investedAmount && purchasePrice) {
    if (isCurrency(investedAmount)) {
      investedAmountNumber = parseNumber(investedAmount);
      return (investedAmountNumber / purchasePriceNumber).toFixed(5);
    }
  }
  return "";
};

export const getTotalReturn = (
  coins: string | number,
  sellPrice: string | number
): string => {
  if (coins && sellPrice) {
    let coinsNumber = parseNumber(coins);
    let sellPriceNumber = parseNumber(sellPrice);
    let result = coinsNumber * sellPriceNumber;
    return formatCurrency(result);
  }
  return "";
};

export const getNetReturn = (investment: any, totalReturn: any) => {
  if (!totalReturn || !investment) {
    return null;
  }
  let retval = parseNumber(totalReturn) - parseNumber(investment);
  return formatCurrency(retval);
};

export const parseNumber = (item?: string | number): number => {
  if (!item) {
    return 0;
  }
  if (typeof item === "number") {
    return item;
  }
  return item ? parseFloat(item.replace(/[^0-9.-]/gm, "")) : 0;
};

const isCurrency = (item?: string | number): boolean => {
  if (!item) {
    return false;
  }
  if (typeof item === "number") {
    return false;
  }
  return !!item.match(/\$/);
};

export const formatCurrency = (num: number) => {
  let n = Math.round(num * 100) / 100;
  let formatted = "";
  if (n < 1) {
    formatted = n.toFixed(4);
  } else {
    formatted = n.toFixed(2);
  }
  return currency.format(Number(formatted));
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});