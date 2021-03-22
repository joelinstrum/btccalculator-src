import React, {useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { toDollars } from "../../../utils";
import { tickerList } from "../../../config/config"

const TickerCurrent = () => {

  const { currentTicker } = useContext(AppContext);

  return (
    <div className="flex-row m-flex-row-15">

    {
      tickerList.map( ticker => 
        (
          <div key={ticker.symbol}>
            <span className="ticker-label">{ticker.label}:</span>
            <span className="ticker-value">
              {currentTicker && toDollars(currentTicker[ticker.symbol])}
              <TickerPct symbol={ticker.symbol} />
            </span>
          </div>
        ))
    }
    </div>
  );
}

const TickerPct = ({ symbol }) => {
  const { historicalTicker } = useContext(AppContext);
  const [pct, setPct] = useState();
  useEffect( () => {
    if(historicalTicker.hasOwnProperty(symbol) && historicalTicker[symbol].hasOwnProperty("diff")){
      setPct(historicalTicker[symbol].diff);
    }
  }, [historicalTicker, symbol]);
  const upOrDown = pct > 0 ? "up" : "down";
  let pctDisplay = isNaN(pct) ? "..." : pct; 
  pctDisplay = pctDisplay.replace(/-/g, '');
  
  return (<React.Fragment>
          { pct && (
            <span className="pct-container">
              <span className={ `ticker-triangle-${upOrDown}`}>&#9662;</span>
              <span className={ `ticker-${upOrDown}`}>{ pctDisplay }</span>
            </span>
          )}
          </React.Fragment>)
}

export default TickerCurrent;