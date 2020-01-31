import React from "react";

import { Container, LoadComponet, Mensagem } from "./styles";

export default function loading() {
  return (
    <Container>
      <LoadComponet />
      <Mensagem>Aguarde enquanto deixamos tudo pronto....</Mensagem>
    </Container>
  );
}
