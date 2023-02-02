import { styled } from "@mui/system";
import CSS from "csstype";

interface FormRowProps {
  children?: React.ReactNode;
  label: string | React.ReactNode;
  width?: string;
  align?: string;
  sx?: CSS.Properties;
}

const FormRowStyled = styled("div", {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "align",
})<FormRowProps>(({ theme, width, align }) => ({
  display: "flex",
  width,
  justifyContent: align || "left",
}));

const FormRow: React.FC<FormRowProps> = (props) => {
  return (
    <FormRowStyled {...props}>
      <div>{props.label}</div>
      <div>{props.children}</div>
    </FormRowStyled>
  );
};

export default FormRow;
