import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Ul, Li, LinkTo } from "./styles";

export default function Menu() {
  const [location] = useState(useLocation());

  return (
    <Ul>
      <LinkTo to="/">
        <Li ativo={location.pathname === "/" ? true : false}>Incio</Li>
      </LinkTo>
      <LinkTo to="/linhas">
        <Li ativo={location.pathname === "/linhas" ? true : false}>
          Linhas de pesquisa
        </Li>
      </LinkTo>
      <LinkTo to="/membros">
        <Li ativo={location.pathname === "/membros" ? true : false}>Membros</Li>
      </LinkTo>
      <LinkTo to="/download">
        <Li ativo={location.pathname === "/download" ? true : false}>
          Download
        </Li>
      </LinkTo>
      <LinkTo to={{ pathname: "/", hash: "#contato" }}>
        <Li ativo={location.pathname === "/#contato" ? true : false}>
          Contato
        </Li>
      </LinkTo>
    </Ul>
  );
}
