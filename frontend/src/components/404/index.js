import React from "react";

import { Container, Image, TextDescription } from "./styles";

import Error from "../../assets/svgs/Error404.svg";

export default function Error404() {
  return (
    <Container>
      <Image src={Error} />
      <TextDescription>
        A pagina requisitada não foi encontrada.
      </TextDescription>
    </Container>
  );
}
