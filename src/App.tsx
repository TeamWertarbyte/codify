import React from "react";
import "./App.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  PaletteType,
} from "@material-ui/core";

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
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
