import { ThemeProvider, colors, createTheme } from "@mui/material";

const Theme = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "Cartoon, sans-serif",
    },
    palette: {
      primary: {
        main: colors.lightBlue["800"],
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
