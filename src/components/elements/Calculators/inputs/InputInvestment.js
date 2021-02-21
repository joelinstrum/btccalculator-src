import React from "react";

const InputInvestment = ({ value, onChange }) => {
  return (

    <div className="form-row margin-bottom-10">
      <div>
        <div className="form-label">Investment Amount: </div>
      </div>
      <div>
        <div className="form-value">
          <input
            placeholder="ei $20,000"
            onChange={e => onChange(e.target.value)}
            value={value}
          />
        </div>
      </div>
    </div>
  )

}

export default InputInvestment;