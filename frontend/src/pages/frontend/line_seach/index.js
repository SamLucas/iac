import React from "react";

import {
  Container,
  Lista,
  Itens,
  ItemName,
  ItemDescribe,
  View,
  Name,
  Row,
  Describe,
  ProfessoresTitle,
  ContainerLineSearch,
  Header,
  HeaderTitle,
  HeaderDescribe,
  Table,
  Linha,
  Coluna
} from "./styles";

import Menu from "../../../components/menu";

export default function LineSearch({ hystory }) {
  return (
    <>
      <Menu hystory={hystory} />
      <Container>
        <Header>
          <HeaderTitle>Linhas de Pesquisa</HeaderTitle>
          <HeaderDescribe>Conheça nossas linhas de pesquisa</HeaderDescribe>
        </Header>

        <ContainerLineSearch>
          <Lista>
            <Itens ativo>
              <ItemName>Química Computacional</ItemName>
              <ItemDescribe>Desenvolver e aplicar....</ItemDescribe>
            </Itens>
            <Itens>
              <ItemName>Química Computacional</ItemName>
              <ItemDescribe>Desenvolver e aplicar....</ItemDescribe>
            </Itens>
            <Itens>
              <ItemName>Química Computacional</ItemName>
              <ItemDescribe>Desenvolver e aplicar....</ItemDescribe>
            </Itens>
            <Itens>
              <ItemName>Química Computacional</ItemName>
              <ItemDescribe>Desenvolver e aplicar....</ItemDescribe>
            </Itens>
          </Lista>
          <View>
            <Name>Química Computacional</Name>
            <Describe>
              Química Computacional Desenvolver e aplicar ferramentas
              computacionais de análise multivariada para tratamento de dados e
              informações das ciências agrárias e de origem química
              (Quimiometria). De maneira específica, trabalhar com técnicas de
              mineração de dados e reconhecimento de padrões pela aplicação das
              técnicas: HCA (Hierarquical Cluster Analysis), PLS (Partial Least
              Square), PCA (Principal Component Analysis), Response Surface e
              QSAR (Quantitative Structure Activity) para formação de clusters,
              eliminação de sobreposições, otimização de processos e cálculos de
              modelos matemáticos.
            </Describe>
            <Row>
              <ProfessoresTitle>Professor participante: </ProfessoresTitle>
              <p>Prof. Dr. Ricardo Marques da Costa.</p>
            </Row>

            <Table>
              <Linha>
                <Coluna header>Nome</Coluna>
                <Coluna header>Autor</Coluna>
                <Coluna header>Paper</Coluna>
              </Linha>
              <Linha>
                <Coluna>Effect of Endophytic Fungal Associations on t</Coluna>
                <Coluna>Bruna A. S. Parpinelli,a Katia A. Siqueira,a </Coluna>
                <Coluna>JBCS_2017_Vochysia.pdf</Coluna>
              </Linha>
            </Table>
          </View>
        </ContainerLineSearch>
      </Container>
    </>
  );
}
