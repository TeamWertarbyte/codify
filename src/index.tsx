import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  unstable_createMuiStrictModeTheme,
  CssBaseline,
  MuiThemeProvider,
  PaletteType,
} from "@material-ui/core";
import { SnackbarProvider } from "material-ui-snackbar-provider";

const muiTheme = (themeType: PaletteType = "light") =>
  unstable_createMuiStrictModeTheme({
    palette: {
      primary: {
        main: "#24796B",
      },
      secondary: {
        main: "#348a31",
      },
      error: {
        main: "#f44336",
      },
      type: themeType,
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme()}>
      <CssBaseline />
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
