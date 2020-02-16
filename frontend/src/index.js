import React from "react";
import ReactDOM from "react-dom";
import Rotas from "./routes";

import { BrowserRouter as Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Theme from "src/config/theme";
import { Typography, GlobalStyle } from "src/config/globalStyle";

const App = () => (
  <ThemeProvider theme={Theme}>
    <Routes>
      <Typography />
      <GlobalStyle />
      <Rotas />
    </Routes>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
