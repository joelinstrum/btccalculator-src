import React from "react";

export default ({
  crypto,
  numberOfCoins,
  formattedProfit,
  formattedReturn,
  profit,
}) => (
  <div className="card-container card-2">
    <div>
      <span className="title-medium-label">ROI:&nbsp;</span>
      <span className="title-medium-value">{crypto}</span>
    </div>
    <div>
      Number of coins:{" "}
      <span className="span-100 result-1">
        {numberOfCoins !== 0 ? parseFloat(numberOfCoins).toFixed(2) : "-"}
      </span>
    </div>
    <div>
      Total Return:{" "}
      <span className="span-100 result-1">
        {formattedReturn !== 0 ? formattedReturn : "-"}
      </span>
    </div>
    <div>
      Profit:{" "}
      <span
        className={`span-100 ${profit > 0 ? "result-2" : "result-negative"}`}
      >
        {formattedProfit !== 0 ? formattedProfit : ""}
      </span>
    </div>
  </div>
);
