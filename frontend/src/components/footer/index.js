import React from "react";

import { Copyright, Container, ImageIf } from "./styles";

export default function footer() {
  return (
    <Container>
      <ImageIf src={require("src/assets/logo_if.png")} />
      <Copyright>
        © Copyright 2020 - Desenvolvido por Samuel Lucas e Naiara Gaspar - Login
      </Copyright>
    </Container>
  );
}
