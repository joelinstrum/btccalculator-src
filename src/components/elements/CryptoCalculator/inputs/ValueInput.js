import React from "react";

const ValueInput = ({
  label,
  onChangeHandler,
  value = "",
  placeholder,
  disabled,
  onFocus
}) => (
  <div className="flex-row div-spacing-10">
    <div className="left-label">{label}: </div>
    <div className="input-container">
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChangeHandler(e.target.value)}
        value={value !== 0 ? value : ""}
        disabled={disabled}
        onFocus={() => onFocus && onFocus(true)}
        onBlur={() => onFocus && onFocus(false)}
      />
    </div>
  </div>
);

export default ValueInput;
