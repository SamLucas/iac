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
  ImageProf,
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
          <HeaderTitle>Membros</HeaderTitle>
          <HeaderDescribe>Conheça os nossos membros</HeaderDescribe>
        </Header>

        <ContainerLineSearch>
          <Lista>
            <Itens ativo>
              <ItemName>Prof. Dr. Ricardo Marques da Costa</ItemName>
              <ItemDescribe>Bacharel em Ciência da Com....</ItemDescribe>
            </Itens>
            <Itens>
              <ItemName>Prof. Dr. Ricardo Marques da Costa</ItemName>
              <ItemDescribe>Bacharel em Ciência da Com....</ItemDescribe>
            </Itens>
            <Itens>
              <ItemName>Prof. Dr. Ricardo Marques da Costa</ItemName>
              <ItemDescribe>Bacharel em Ciência da Com....</ItemDescribe>
            </Itens>
            <Itens>
              <ItemName>Prof. Dr. Ricardo Marques da Costa</ItemName>
              <ItemDescribe>Bacharel em Ciência da Com....</ItemDescribe>
            </Itens>
          </Lista>
          <View>
            <Name>Prof. M.Sc: Ramon Gustavo Teodoro Marques da Silva</Name>
            <Row>
              <ImageProf src="https://picsum.photos/300/400" />
              <div>
                <Describe>
                  Bacharel em Ciência da Computação pela Universidade José do
                  Rosário Velano - UNIFENAS, Ano 2005. Especialista em Designer
                  Instrucional para EaD Virtual pela Universidade Federal de
                  Itajubá MG - UNIFEI, Ano 2009. Mestre em Biotecnologia
                  (Bioinformática), pela Universidade de Ribeirão Preto SP -
                  UNAERP, ano 2014. Doutorando em Biotecnologia (Bioinformática)
                  pela Universidade de Ribeirão Preto - SP. Professor do quadro
                  efetivo do Instituto Federal Sul de Minas - Câmpus Muzambinho,
                  nos cursos de Bacharelado em Ciência da Computação e Técnico
                  em Informática presencial e a distância. Membro colaborador
                  dos grupos de pesquisa Informática Aplicada às Ciências (IAC)
                  e Laboratório de Tecnologias de Software e Computação Aplicada
                  à Educação (LabSoft), ambos do IFSULDEMINAS, desde 2013. Atua
                  e tem interesse nas áreas de Programação Web Móvel, Web
                  Semântica, Acessibilidade Web, Gamificação e Jogos
                  Educacionais, Análise e Mineração de dados e textos,
                  Bioinformática, Tecnologias de Informação e Comunicação.
                </Describe>
                <LinkLattes>Link corriculum lates</LinkLattes>
              </div>
            </Row>
          </View>
        </ContainerLineSearch>
      </Container>
    </>
  );
}
