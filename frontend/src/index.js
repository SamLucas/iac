import React from "react";
import ReactDOM from "react-dom";
import Rotas from "./routes";

import { BrowserRouter as Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Theme from "src/config/Theme";

const App = () => (
  <ThemeProvider theme={Theme}>
    <Routes>
      <Rotas />
    </Routes>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
