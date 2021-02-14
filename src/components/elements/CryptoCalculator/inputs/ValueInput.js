import React from "react";

export default ({
  label,
  onChangeHandler,
  value = "",
  placeholder,
  disabled,
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
      />
    </div>
  </div>
);
