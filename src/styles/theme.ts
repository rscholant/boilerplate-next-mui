import { createTheme } from "@mui/material/styles";

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#556cd6",
      100: "#003C3A", //secondary-medium
      200: "#666666", //neutral-low-medium
      300: "#292929", //neutral-low-dark
      400: "#026BD4", //feedback-helper-dark
      500: "#f6f6f6", //bg fundo
      600: "#006966",
      700: "#A3A3A3",
      800: "#dadada",
      900: "#F5F5F5",
    },
    secondary: {
      main: "#bbdf33",
      100: "#e2ff75",
      200: "#759401",
      300: "#fff",
      400: "#ABD801",
      600: "#CAFF00",
      700: "#bbdf33",
      800: "#b3db1a",
      900: "#abd801",
    },
    error: {
      main: "#c70505",
      100: "#df0000",
      200: "#ff0000",
      300: "#ee3a1f",
      400: "#f40000",
      500: "#FF0800",
      600: "#D92621",
      700: "#CC0600",
      800: "#A60500",
    },
    info: {
      main: "#003C3A",
      100: "#668a88",
      200: "#4c7675",
      300: "#326261",
      400: "#003634",
      500: "#00302e",
      600: "#002a28",
      700: "#002422",
      800: "#00453c",
      900: "#001F1F",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: ${["Open Sans", "sans-serif"].join(",")};
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
        `,
    },
  },
});
