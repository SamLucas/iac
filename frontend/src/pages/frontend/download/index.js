import React, { useState, useEffect } from "react";
import api from "../../../services/api";
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
import Footer from "src/components/footer";

export default function Member({ hystory }) {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState({});

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/ferramentas");
      setFiles(response.data);
      setFile(response.data[0]);
    }

    loadData();
  }, []);

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
            {files.map(fil => (
              <Itens
                ativo={fil.id === file.id}
                key={fil.id}
                onClick={() => setFile(fil)}
              >
                <ItemName>{fil.titulo}</ItemName>
              </Itens>
            ))}
          </Lista>
          <View>
            <Name>{file.titulo} </Name>
            <Describe>{file.descricao}</Describe>
            <LinkLattes
              href={`http://localhost:3333/download/downloads/${file.ferramenta_url}`}
              download
              target="_blanck"
            >
              Link para Download
            </LinkLattes>
          </View>
        </ContainerLineSearch>
      </Container>
      <Footer />
    </>
  );
}
