import React, { useEffect, useState } from "react";
import { Container } from "src/config/DefaultStyle";
import {
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
import Footer from "src/components/footer";
import api from "../../../services/api";

export default function Member({ hystory }) {
  const [membros, setMembros] = useState([]);
  const [membro, setMembro] = useState({});

  useEffect(() => {
    async function loadMembros() {
      const response = await api.get("/usuarios");

      setMembro(response.data[0]);
      setMembros(response.data);
    }
    loadMembros();
  }, []);

  return (
    <>
      <Menu />
      <Container>
        <Header>
          <HeaderTitle>Membros</HeaderTitle>
          <HeaderDescribe>Conheça os nossos membros</HeaderDescribe>
        </Header>

        <ContainerLineSearch>
          <Lista>
            {membros.map(mem => (
              <Itens
                key={mem.id}
                ativo={mem.id === membro.id}
                onClick={() => setMembro(mem)}
              >
                <ItemName>{mem.name}</ItemName>
                <ItemDescribe>
                  {mem.descricao.substr(0, 30) + "..."}
                </ItemDescribe>
              </Itens>
            ))}
          </Lista>
          <View>
            <Name>{membro.name}</Name>
            <Row>
              <ImageProf
                src={
                  membro.foto_url != null
                    ? `${process.env.REACT_APP_API_URL}/files/members/${membro.foto_url}`
                    : "https://picsum.photos/300/400"
                }
              />
              <div>
                <Describe>{membro.descricao}</Describe>
                <LinkLattes href={membro.lattes}>
                  Link corriculum lates
                </LinkLattes>
              </div>
            </Row>
          </View>
        </ContainerLineSearch>
      </Container>
      <Footer />
    </>
  );
}
