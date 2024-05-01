import { ThemeProvider, colors, createTheme } from "@mui/material";
import { amber, green, grey, yellow } from "@mui/material/colors";

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
    components: {
      MuiCard: {
        variants: [
          {
            props: { variant: "BON" },
            style: {
              border: `3px solid ${green["900"]}`,
              outline: `4px solid ${green["700"]}`,
              backgroundColor: green["500"],
            },
          },
          {
            props: { variant: "ABSENT" },
            style: {
              border: `3px solid ${grey["A700"]}`,
              outline: `4px solid ${grey[600]}`,
              backgroundColor: grey["600"],
            },
          },
          {
            props: { variant: "INCORRECT" },
            style: {
              border: `3px solid ${yellow["400"]}`,
              outline: `4px solid ${yellow[700]}`,
              backgroundColor: amber["500"],
            },
          },
          {
            props: { variant: "UNKNOWN" },
            style: {
              backgroundColor: "lightgray",
            },
          },
        ],
        styleOverrides: {
          root: {
            border: "3px solid gray",
            borderRadius: "5px",
            width: "40px",
            height: "40px",
            margin: "4px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
