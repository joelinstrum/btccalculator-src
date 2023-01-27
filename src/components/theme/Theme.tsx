import { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { dark } from "./themes";

interface ITheme {
  children?: React.ReactNode;
}

const Theme: FC<ITheme> = ({ children }) => {
  const theme = createTheme({
    ...dark,
    ...{
      components: {
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: "pointer",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              padding: 0,
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
