import { cryptos } from "../models";
import { constants } from "utils/constants";

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

export const toBool = (item: string | undefined) => {
  if (item === "false") {
    return false;
  }
  return Boolean(item);
};

export const getInitialCards = () => {
  let cards = getQueryStringCards();
  if (cards && cards.length) {
    return cards;
  }
  if (window.localStorage.getItem("storedRoiCards")) {
    return JSON.parse(window.localStorage.getItem("storedRoiCards") || "[]");
  }
  return [];
};

export const getQueryStringCards = (): IRoiCard[] => {
  const params = new URLSearchParams(window.location.search);
  if (params && params.get("roiCards")) {
    const cards = params.get("roiCards");
    if (!cards) {
      return [];
    } else {
      try {
        console.log(decodeURI(cards));
        return JSON.parse(decodeURI(cards));
      } catch (e) {
        console.error(e);
        return [];
      }
    }
  }
  return [];
};

export const getShareUrl = (str: any) => {
  const port = window.location.port;
  let domain = window.location.protocol + "//" + window.location.hostname;
  if (port !== "80") {
    domain += ":" + port;
  }

  let queryString = "?roiCards=";
  if (str) {
    queryString += JSON.stringify(str);
    return encodeURI(domain + queryString);
  }
  return domain.toString();
};
