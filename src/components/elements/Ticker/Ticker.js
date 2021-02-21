import React, {useState, useEffect, useContext} from "react";
import TickerCurrent from "./TickerCurrent";
import TickerHistorical from "./TickerHistorical";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AppContext } from "../AppContext";
import { dateFormatter } from "../../../utils";

const Ticker = () => {

  const [showDateSetter, setShowDateSetter] = useState();
  const [startDate, setStartDate] = useState();
  const { setHistoricalTickerDate } = useContext(AppContext);

  useEffect(() => {
    setHistoricalTickerDate(dateFormatter(startDate))
    setShowDateSetter(false);
  }, [startDate, setHistoricalTickerDate, setShowDateSetter])

  return (
    <div className="body-centered">
      <div className="body-centered ticker-text">
        <div className="m-flex-row-10">
          <span className="ticker-date-value">Current</span>
        </div>
        <TickerCurrent />

        <div className="flex-row-m margin-top-10 m-flex-row-10">
          <span className="link-normal margin-right-5" onClick={ () => setShowDateSetter(!showDateSetter)}>
            { showDateSetter ? "Cancel" : <i>Compare with previous date</i>}
          </span>
          <span>{ 
            showDateSetter && 
            <DatePicker selected={startDate} onChange={ date => setStartDate(date)} /> 
            }</span>
        </div>
        { startDate && <TickerHistorical /> }
        
      </div>
    </div>
    )
}

export default Ticker;