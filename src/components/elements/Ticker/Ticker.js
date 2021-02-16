import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useApiFetch, useToggleDisplayDate } from "./hooks";
import { dateFormatter } from "./utils";

const Ticker = () => {
  const [showHistorical, toggleShowHistorical] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const { eth, btc, bnb, ltc, bch } = useApiFetch(startDate);
  const historicalText = useToggleDisplayDate(startDate);

  const formatter = (price) => {
    if (price && !isNaN(price)) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);
    } else {
      return price;
    }
  };

  const displayDatePicker = () => {
    toggleShowHistorical(!showHistorical);
  };

  const onDateSelect = (date) => {
    toggleShowHistorical(false);
  };

  return (
    <div>
      <div className="ticker-container flex-row">
        <div className="text-medium">Data from {dateFormatter(startDate)} </div>
        <div className="link marginLeft10" onClick={() => displayDatePicker()}>
          {historicalText}
        </div>
        <div className="text-medium marginLeft10">
          {showHistorical && (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              onSelect={onDateSelect}
            />
          )}
        </div>
      </div>

      <div className="ticker-container flex-row">
        <div className="ticker-label">Bitcoin: </div>
        <div className="ticker-value">{formatter(btc)}</div>

        <div className="ticker-label">Ethereum: </div>
        <div className="ticker-value">{formatter(eth)}</div>

        <div className="ticker-label">Bitcoin Cash: </div>
        <div className="ticker-value">{formatter(bch)}</div>

        <div className="ticker-label">Litecoin: </div>
        <div className="ticker-value">{formatter(ltc)}</div>

        <div className="ticker-label">Binance: </div>
        <div className="ticker-value">{formatter(bnb)}</div>
      </div>
    </div>
  );
};

export default Ticker;