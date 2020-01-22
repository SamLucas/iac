import React from "react";

import {
  Container,
  Lista,
  Itens,
  ItemName,
  View,
  Name,
  Describe,
  LinkLattes,
  ContainerLineSearch,
  Header,
  HeaderTitle,
  HeaderDescribe
} from "./styles";

import Menu from "../../../components/menu";

export default function Member({ hystory }) {
  return (
    <>
      <Menu hystory={hystory} />
      <Container>
        <Header>
          <HeaderTitle>Download</HeaderTitle>
          <HeaderDescribe>
            Conheças as ferramentas produzidas por nosso grupo
          </HeaderDescribe>
        </Header>

        <ContainerLineSearch>
          <Lista>
            <Itens ativo>
              <ItemName>
                System Image Analysis of Cells Structures (SIACS)
              </ItemName>
            </Itens>
            <Itens>
              <ItemName>
                System Image Analysis of Cells Structures (SIACS)
              </ItemName>
            </Itens>
          </Lista>
          <View>
            <Name> System Image Analysis of Cells Structures (SIACS)</Name>

            <Describe>
              O Software faz o cálculo da área de imagens de Estruturas
              Histológicas de animais e vegetais. Patente nº: BR 51 2015
              000558-8
            </Describe>
            <LinkLattes>Link para Download</LinkLattes>
          </View>
        </ContainerLineSearch>
      </Container>
    </>
  );
}
