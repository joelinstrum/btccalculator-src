import ButtonStyled from "./ButtonStyled";
import { ButtonProps } from "./interfaces";

const Button: React.FC<ButtonProps> = ({
  children,
  variation,
  disabled,
  onClick,
}) => {
  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <ButtonStyled
      size="medium"
      type="button"
      onClick={clickHandler}
      variation={typeof variation !== "undefined" ? variation : "primary"}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
