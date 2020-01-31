import React, { useEffect, useState } from "react";

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
import api from "../../../services/api";

export default function Member({ hystory }) {
  const [membros, setMembros] = useState([]);
  const [membro, setMembro] = useState({});

  async function loadMembros() {
    const { data } = await api.get("/usuarios");
    setMembro(data[0]);
    setMembros(data);
  }

  useEffect(() => loadMembros(), []);

  return (
    <>
      <Menu />
      <Container>
        <Header>
          <HeaderTitle>Membros</HeaderTitle>
          <HeaderDescribe>Conheça os nossos membros</HeaderDescribe>
        </Header>
        {/* 
        <ContainerLineSearch>
          <Lista>
            {membros.map(mem => (
              <Itens
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
                    ? `http://localhost:3333/files/${membro.foto_url}`
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
        </ContainerLineSearch> */}
      </Container>
    </>
  );
}
