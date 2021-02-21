import React, {useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { toDollars } from "../../../utils";

const TickerCurrent = () => {

  const { currentTicker } = useContext(AppContext);

  return (
    <div className="flex-row m-flex-row-15">

    <div >
      <span className="ticker-label">Bitcoin:</span>
      <span className="ticker-value">
        {currentTicker && toDollars(currentTicker.btc)}
        <TickerPct symbol={"btc"} />
      </span>
    </div>

    <div className="d-margin-left-15">
      <span className="ticker-label">Ethereum:</span>
      <span className="ticker-value">
        {currentTicker && toDollars(currentTicker.eth)}
        <TickerPct symbol={"eth"} />
      </span>
    </div>

    <div className="d-margin-left-15">
      <span className="ticker-label">Bitcoin Cash:</span>
      <span className="ticker-value">
        {currentTicker && toDollars(currentTicker.bch)}
        <TickerPct symbol={"bch"} />
      </span>
    </div>

    <div className="d-margin-left-15">
      <span className="ticker-label">Litecoin:</span>
      <span className="ticker-value">
        {currentTicker && toDollars(currentTicker.ltc)}
        <TickerPct symbol={"ltc"} />
      </span>
    </div>

    <div className="d-margin-left-15">
      <span className="ticker-label">Binance:</span>
      <span className="ticker-value">
        {currentTicker && toDollars(currentTicker.bnb)}
        <TickerPct symbol={"bnb"} />
      </span>
    </div>

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