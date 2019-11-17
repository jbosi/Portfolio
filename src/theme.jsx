import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#FFF',
      contrastText: '#FFF',
    },
    text: {
      primary: "#FFFFFF"
    },
  },
  typography: {
    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: '200',
      fontSize: "2.125rem",
      lineHeight: 1.17,
      letterSpacing: "0.00735em",
    },
  },
});