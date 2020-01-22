import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Ul, Li, LinkTo } from "./styles";

export default function Menu() {
  const [location, setLocation] = useState(useLocation());

  return (
    <Ul>
      <Li ativo={location.pathname == "/" ? true : false}>
        <LinkTo to="/">Incio</LinkTo>
      </Li>
      <Li ativo={location.pathname == "/linha" ? true : false}>
        <LinkTo to="/linha">Linhas de pesquisa</LinkTo>
      </Li>
      <Li ativo={location.pathname == "/membros" ? true : false}>
        <LinkTo to="/membros">Membros</LinkTo>
      </Li>
      <Li>
        <LinkTo>Ferramentas</LinkTo>
      </Li>
      <Li>
        <LinkTo to="/#contato">Contato</LinkTo>
      </Li>
    </Ul>
  );
}
