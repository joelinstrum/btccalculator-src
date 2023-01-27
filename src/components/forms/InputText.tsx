import { useState } from "react";
import { ClickAwayListener } from "@mui/base";
import { styled } from "@mui/system";

interface InputTextProps {
  updatetextvalue: () => void;
  ariaLabel?: string;
  size: "x-small" | "small" | "medium" | "large";
  options?: { [key: string]: string };
  value?: string | number | null | undefined;
}

const InputTextStyled = styled("div", {
  shouldForwardProp: (prop) => prop !== "updatetextvalue",
})<InputTextProps>(({ theme, size, options }) => ({
  fontSize: 13,
  position: "relative",
  "& span:nth-of-type(1)": {
    visibility: options ? "visible" : "hidden",
    cursor: options ? "pointer" : "default",
  },
  "& div:nth-of-type(1)": {
    position: "absolute",
    top: "22px",
    left: "6px",
    padding: "2px",
    zIndex: 500,
    minWidth: "200px",
    background: theme.palette.dropDown.background,
    color: theme.palette.dropDown.color,
    "& ul": {
      listStyleType: "none",
      padding: 0,
      margin: 0,
      "& li": {
        cursor: "pointer",
        "&:hover": {
          background: theme.palette.dropDown.hoverBackground,
        },
      },
    },
  },
  "& input": {
    marginLeft: "6px",
    textAlign: "right",
    "&:focus": {
      outline: "none",
    },
    maxWidth: (function (): string {
      switch (size) {
        case "x-small":
          return "20px";
        case "small":
          return "50px";
        case "medium":
          return "100px";
        case "large":
          return "200px";
        default:
          return "80px";
      }
    })(),
  },
}));

const InputText: React.FC<InputTextProps> = ({
  updatetextvalue: updateTextValue,
  ariaLabel,
  size,
  options,
  value,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [textValue, setTextValue] = useState(value || "");

  const showOptionsHandler = () => {
    setShowOptions(!showOptions);
  };

  const optionsClickHandler = (key: string) => {
    console.log(key);
    showOptionsHandler();
  };

  const updateInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.currentTarget.value);
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
                  <li onClick={() => optionsClickHandler(key)} key={key}>
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
