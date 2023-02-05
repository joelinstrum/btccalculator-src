export interface InputTextProps {
  updatetextvalue?: () => void;
  ariaLabel?: string;
  size: "x-small" | "small" | "medium" | "large";
  options?: { [key: string]: string };
  value?: string;
  onChange?: (value: string) => void;
  optionsChangeHandler?: (key: string, value: string) => void;
  onBlur?: (value: string) => void;
  disabled?: boolean;
  ref?: HTMLInputElement;
  autoFocus?: boolean;
}

export interface ButtonProps {
  children?: React.ReactNode;
  ariaLabel?: string;
  size: "x-small" | "small" | "medium" | "large";
  variation?:
    | "primary"
    | "secondary"
    | "submit"
    | "error"
    | "alert"
    | "success";
  value?: string;
  onClick?: (value?: string) => void;
  type?: string;
  disabled?: boolean;
}
