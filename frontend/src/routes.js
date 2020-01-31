import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Error404 from "./components/404";
import News from "./pages/frontend/news";
import Home from "./pages/frontend/home";
import Members from "./pages/frontend/member";
import Download from "./pages/frontend/download";
import LineSearch from "./pages/frontend/line_seach";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/linhas" exact component={LineSearch} />
        <Route path="/membros" exact component={Members} />
        <Route path="/news" exact component={News} />
        <Route path="/Download" exact component={Download} />
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
