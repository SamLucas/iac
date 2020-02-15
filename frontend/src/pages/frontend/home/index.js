import React from "react";
import {
  Container,
  Header,
  Title,
  DescribeHeader,
  Link,
  IdentifySession
} from "./styles";

import { Linkto } from "./news/styles";

import { ContainerInfo, Line, Name, Describe, Image } from "./cardinfo";
import { ContainerAbout, TitleAbout, DescribeAbout, ImageAbout } from "./about";

import ContainerNews from "./news";
import ContainerContact from "./contact";

import Menu from "src/components/menu";
import Footer from "src/components/footer";

import LineSearch from "../../../assets/svgs/LineSearch.svg";
import Download from "../../../assets/svgs/Download.svg";
import About from "../../../assets/svgs/About.svg";
import Team from "src/assets/svgs/Team.svg";
import { useEffect } from "react";

const DataCard = [
  {
    icon: Team,
    name: "Membros",
    describe: "Conheça os nossos integrantes do grupo de pesquisa",
    link: "/membros"
  },
  {
    icon: Download,
    name: "Downloads",
    describe: "Veja os projetos desenvolvidos pelo grupo de pesquisa IAC",
    link: "/download"
  },
  {
    icon: LineSearch,
    name: "Linha de pesquisa",
    describe: "Confira as nossos papaers e linhas de pesquisa.",
    link: "/linha"
  }
];

export default function Home({ history }) {
  // useEffect(() => {
  //   const hash = history.location.hash;
  //   if (hash && document.getElementById(hash.substr(1))) {
  //     history.replace("/");

  //     document
  //       .getElementById(hash.substr(1))
  //       .scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [history.location.hash, history]);

  return (
    <>
      <Menu history={history} />
      <Container>
        <Header>
          <Title>
            IAC - Grupo de Pesquisa Informática Aplicada às Ciências
          </Title>
          <DescribeHeader>
            Formado em 2013 o grupo possui o interesse de criar ferramentas e
            metodologias para computação e análise de dados oriundos das
            ciências agrárias
          </DescribeHeader>
          <Link>Saiba mais</Link>
        </Header>
        <Line>
          {DataCard.map(cont => (
            <Linkto to={cont.link} key={cont.link}>
              <ContainerInfo>
                <Image src={cont.icon} alt={cont.name} />
                <Name>{cont.name}</Name>
                <Describe>{cont.describe}</Describe>
              </ContainerInfo>
            </Linkto>
          ))}
        </Line>
        <ContainerAbout>
          <div>
            <IdentifySession>Sobre-nós</IdentifySession>
            <TitleAbout>
              Grupo de Pesquisas Informática Aplicada às Ciências (IAC).
            </TitleAbout>
            <DescribeAbout>
              O Grupo de Pesquisas Informática Aplicada às Ciências (IAC) se
              formou em 2013 idealizado pelo Prof. Dr. José Antônio Dias Garcia
              que possuía o interesse de criar ferramentas e metodologias para
              computação e análise de dados oriundos das ciências agrárias.
            </DescribeAbout>
            <DescribeAbout>
              De 2013 até os dias atuais, o grupo recebeu novos integrantes que
              juntos trabalham e buscam o desenvolvimento ferramentas e
              metodologias para otimização e informatização de técnicas e
              procedimentos empregados nas atividades de campo. O grupo de
              pesquisa IAC além da criação, desenvolvimento e aplicação de
              ferramentas e metodologias visa o desenvolvimento regional e
              fortalecimento do eixo ensino, pesquisa e extensão no âmbito do
              Instituto Federal de Educação, Ciência e Tecnologia do Sul de
              Minas (IFSULDEMINAS).
            </DescribeAbout>
          </div>
          <ImageAbout src={About} />
        </ContainerAbout>

        <ContainerNews />
        <ContainerContact />
        <Footer />
      </Container>
    </>
  );
}
