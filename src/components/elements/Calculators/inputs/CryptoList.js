import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../elements/AppContext";

export const getCryptoName = symbol => {
  switch (symbol) {
    case "eth":
      return "Ethereum";

    case "btc":
      return "Bitcoin";

    case "bch":
      return "Bitcoin cash";

    case "uni":
      return "Uni-Swap";

    case "bnb":
      return "Binance"

    default:
      return ""
  }
}

const CryptoList = ({ click }) => {
  const { currentTicker, historicalTicker } = useContext(AppContext);

  useEffect(() => {
    console.log(historicalTicker)
  }, [historicalTicker]);

  const hasHistoricalData = (ticker) => {
    return historicalTicker && historicalTicker.hasOwnProperty(ticker) && historicalTicker[ticker].hasOwnProperty("value")
  }

  return (
    <div>
      <table className="crypto-table">
        <tbody>
          <tr className="crypto-table-header">
            <td>Crypto</td>
            <td>Current Price</td>
            {historicalTicker && <td>Past price</td>}
          </tr>
          {
            Object.keys(currentTicker).map((ticker, i) => {
              return (
              <tr key={ticker}>
                <td className="crypto-table-data">
                  <span>{getCryptoName(ticker)}</span>
                </td>
                <td className="crypto-table-link">
                <span
                    onClick={() => click(currentTicker[ticker],
                      getCryptoName(ticker),
                      ticker)}>{currentTicker[ticker]}</span>
                </td>
                { hasHistoricalData(ticker) && (
                  <td className="crypto-table-link">
                    <span
                      onClick={() => click(historicalTicker[ticker].value,
                        getCryptoName(ticker),
                        ticker)}>
                      {historicalTicker[ticker].value}
                    </span>
                  </td>
                )}
              </tr>
              )})}
        </tbody>
      </table>
      <div>
        { !hasHistoricalData("btc") &&
        (<div className="font-12 padding-5 margin-top-10">Click on "Compare with previous date" to choose an earlier price-point</div>)}
      </div>
    </div>
  );
};

export default CryptoList;