import { useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/base";
import { InputTextProps } from "./interfaces";
import InputTextStyled from "./InputTextStyled";

const InputText: React.FC<InputTextProps> = ({
  updatetextvalue: updateTextValue,
  ariaLabel,
  size,
  options,
  value,
  optionsChangeHandler,
  onBlur,
  disabled,
  onChange,
  autoFocus,
  placeHolder,
  ref,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [textValue, setTextValue] = useState(value || "");

  useEffect(() => {
    setTextValue(value || "");
  }, [value]);

  const showOptionsHandler = () => {
    if (disabled) {
      return;
    }
    setShowOptions(!showOptions);
  };

  const optionsClick = (key: string, value: string) => {
    showOptionsHandler();
    if (optionsChangeHandler) {
      optionsChangeHandler(key, value);
    }
  };

  const updateInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
    if (onChange) {
      onChange(e.currentTarget.value);
    }
  };

  const updateOnBlur = () => {
    if (onBlur) {
      onBlur(textValue);
    }
  };

  return (
    <InputTextStyled
      size={size}
      updatetextvalue={updateTextValue}
      options={options}
    >
      <input
        type="text"
        aria-label={ariaLabel || ""}
        value={textValue}
        onChange={updateInputText}
        onBlur={updateOnBlur}
        disabled={disabled}
        autoFocus={autoFocus}
        placeholder={placeHolder}
      />
      <span onClick={showOptionsHandler}>
        {showOptions ? <>&#9650;</> : <>&#9660;</>}
      </span>
      {showOptions && (
        <ClickAwayListener onClickAway={showOptionsHandler}>
          <div>
            <ul>
              {options &&
                Object.keys(options).map((key) => (
                  <li onClick={() => optionsClick(key, options[key])} key={key}>
                    {options[key]}
                  </li>
                ))}
            </ul>
          </div>
        </ClickAwayListener>
      )}
    </InputTextStyled>
  );
};

export default InputText;
