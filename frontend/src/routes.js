import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/frontend/home";
import LineSearch from "./pages/frontend/line_seach";
import Members from "./pages/frontend/member";
import News from "./pages/frontend/news";
import Error404 from "./components/404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/linha" component={LineSearch} />
        <Route path="/membros" component={Members} />
        <Route path="/news" component={News} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
