import { constants } from "./constants";

const api = {
  get: async (tickers: string[]) => {
    let tickersString = tickers.join(",");
    const endpoint = `${constants.API_URL}/pricemultifull?fsyms=${tickersString}&tsyms=USD&extraParams=CryptoCalculator&ts=1605549600`;
    const headers: object = {
      "Content-Type": "application-json",
    };
    return fetch(endpoint, headers)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error: string) => {
        return { error };
      });
  },
  fetchItem: async (ticker: string, timestamp?: string) => {
    const endpoint = timestamp
      ? `${
          constants.API_URL
        }/pricehistorical?fsym=${ticker.toUpperCase()}&tsyms=USD&ts=${timestamp}&extraParams=CryptoCalculator`
      : `${
          constants.API_URL
        }/price?fsym=${ticker.toUpperCase()}&tsyms=USD&extraParams=CryptoCalculator`;
    const headers: object = {
      "Content-Type": "application-json",
    };
    return fetch(endpoint, headers)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        return { error };
      });
  },
};

export default api;
