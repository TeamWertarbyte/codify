import React from "react";
import "./App.css";
import {
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
  PaletteType,
} from "@material-ui/core";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import CodeEditor from "./components/CodeEditor";

const muiTheme = (themeType: PaletteType = "light") =>
  createMuiTheme({
    palette: {
      primary: {
        main: "#005091",
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

function App() {
  return (
    <MuiThemeProvider theme={muiTheme()}>
      <CssBaseline />
      <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header>
          <CodeEditor />
        </div>
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
