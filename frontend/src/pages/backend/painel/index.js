import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "src/pages/backend/menu";
import { Container } from "./styles";

export default function Painel() {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
}
