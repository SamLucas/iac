import React, { useState, useEffect } from "react";

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
  Coluna,
  LinkA
} from "./styles";

import Menu from "../../../components/menu";
import Footer from "../../../components/footer";
import api from "../../../services/api";
import LoadComponet from "../../../components/loading";

export default function LineSearch({ hystory }) {
  const [linhas, setLinhas] = useState([]);
  const [linha, setLinha] = useState({});
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadMembros() {
    setLoading(true);
    const { data } = await api.get("/linhas");
    setLinhas(data);
    setLinha(data[0]);
    setPapers(data[0].paper);
    setLoading(false);
  }

  useEffect(() => loadMembros(), []);

  return loading ? (
    <LoadComponet />
  ) : (
    <>
      <Menu hystory={hystory} />
      <Container>
        <Header>
          <HeaderTitle>Linhas de Pesquisa</HeaderTitle>
          <HeaderDescribe>Conheça nossas linhas de pesquisa</HeaderDescribe>
        </Header>

        {/* <ContainerLineSearch>
          <Lista>
            {linhas.map(lin => (
              <Itens
                key={lin.id}
                ativo={lin.id === linha.id}
                onClick={() => setLinha(lin)}
              >
                <ItemName>{lin.titulo}</ItemName>
                <ItemDescribe>{lin.texto.substr(0, 30) + "..."}</ItemDescribe>
              </Itens>
            ))}
          </Lista>
          <View>
            <Name>{linha.titulo}</Name>
            <Describe>{linha.texto}</Describe>
            <Row>
              <ProfessoresTitle>Professor participante: </ProfessoresTitle>
              {linha.professores}.
            </Row>

            <Table>
              <Linha>
                <Coluna header>Nome</Coluna>
                <Coluna header>Autor</Coluna>
                <Coluna header>Paper</Coluna>
              </Linha>
              {papers.map(pap => (
                <Linha>
                  <Coluna>{pap.nome}</Coluna>
                  <Coluna>{pap.autor}</Coluna>
                  <Coluna>
                    <LinkA
                      href={`http://localhost:3333/download/papers/${pap.paper_url}`}
                      download
                    >
                      {pap.paper_url.length > 20
                        ? `${pap.paper_url.substr(0, 10) +
                            "..." +
                            pap.paper_url.substr(
                              pap.paper_url.length - 10,
                              pap.paper_url.length
                            )}`
                        : `${pap.paper_url.length}`}
                    </LinkA>
                  </Coluna>
                </Linha>
              ))}
            </Table>
          </View>
        </ContainerLineSearch> */}
      </Container>
      <Footer />;
    </>
  );
}
