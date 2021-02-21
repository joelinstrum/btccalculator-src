import React, {useContext, useEffect} from "react";
import { AppContext } from "../AppContext";
import { useHistoricalTicker } from "../AppContext/AppHooks";
import { toDollars } from "../../../utils";

const TickerHistorical = () => {

  const { historicalTickerDate } = useContext(AppContext);
  const ticker = useHistoricalTicker(historicalTickerDate);
  
  return (
    <React.Fragment>
      <div >
        { historicalTickerDate && <span className="ticker-date-value">Data from {historicalTickerDate}</span> }
      </div>
      <div className="flex-row m-flex-row-15">
        
      <div >
      <span className="ticker-label">Bitcoin:</span>
      <span className="ticker-value">{ticker && toDollars(ticker.btc.value)}</span>
    </div>

    <div >
      <span className="ticker-label">Ethereum:</span>
      <span className="ticker-value">{ticker && toDollars(ticker.eth.value)}</span>
    </div>

    <div >
      <span className="ticker-label">Bitcoin Cash:</span>
      <span className="ticker-value">{ticker && toDollars(ticker.bch.value)}</span>
    </div>

    <div >
      <span className="ticker-label">Litecoin:</span>
      <span className="ticker-value">{ticker && toDollars(ticker.ltc.value)}</span>
    </div>

    <div >
      <span className="ticker-label">Binance:</span>
      <span className="ticker-value">{ticker && toDollars(ticker.bnb.value)}</span>
    </div>

      </div>
    </React.Fragment>
    );
}

export default TickerHistorical;