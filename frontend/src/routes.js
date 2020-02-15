import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Error404 from "./components/404";

// Pages FrontEnd
import News from "./pages/frontend/news";
import Home from "./pages/frontend/home";
import Members from "./pages/frontend/member";
import Download from "./pages/frontend/download";
import LineSearch from "./pages/frontend/line_seach";

// Pages Backend
import Login from "src/pages/backend/login";
import Painel from "src/pages/backend/painel";

import verifyToken from "src/Utils/verifyToken";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/linhas" exact component={LineSearch} />
        <Route path="/membros" exact component={Members} />
        <Route path="/news" exact component={News} />
        <Route path="/Download" exact component={Download} />

        <Route path="/login" exact component={Login} />

        <Route path="/painel" exact component={() => verifyToken(Painel)} />

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
