import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import Theme from "src/config/Theme";

const App = () => (
  <ThemeProvider theme={Theme}>
    <Routes />
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
