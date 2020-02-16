import React from "react";
import { Routes, Route } from "react-router-dom";

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
import Textos from "src/pages/backend/textos";
import Ferramentas from "src/pages/backend/ferramentas";
import Noticias from "src/pages/backend/news";
import Membros from "src/pages/backend/membros";
import Linhas from "src/pages/backend/linhas";

import verifyAcess from "src/utils/verifyAcess";

export default function Rotas() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />

      {/* Frontend */}
      <Route path="/" element={<Home />} />
      <Route path="/linhas" element={<LineSearch />} />
      <Route path="/membros" element={<Members />} />
      <Route path="/news" element={<News />} />
      <Route path="/download" element={<Download />} />

      {/* Backend */}
      <Route path="/login" element={<Login />} />
      <Route path="/painel" element={verifyAcess(Painel)}>
        <Route path="/linhas" element={<Linhas />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/textos" element={<Textos />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
      </Route>
    </Routes>
  );
}
