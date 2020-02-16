import React, { useState, useEffect } from "react";

import {
  Container,
  Profile,
  SeparateList,
  IconDashBoard,
  IconFerramentas,
  IconLinhaDePesquisa,
  IconMembros,
  IconNoticias,
  IconProfile,
  IconSite,
  IconLogout,
  IconText,
  Lista,
  LinkPerson
} from "./styles";

import LoadingPage from "src/components/loading";

export default function MenuBackend() {
  const [dataUser, setDataUser] = useState({});
  const [loading, setLoading] = useState(true);

  // let history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataUser"));
    setDataUser(data);
  }, []);

  useEffect(() => setLoading(false), [dataUser]);

  // const Logout = () => {
  //   alert("asdçjalk");
  //   localStorage.removeItem("dataUser");
  //   history.push("/login");
  // };

  return loading ? (
    <LoadingPage />
  ) : (
    <Container>
      <Profile>
        <img
          alt="Foto de perfil."
          src={
            dataUser.user.foto_url != null
              ? `${process.env.REACT_APP_API_URL}/files/members/${dataUser.user.foto_url}`
              : "https://picsum.photos/300/400"
          }
        />
        <h3>{dataUser.user.name}</h3>
        <p>{dataUser.user.email}</p>

        {console.log(dataUser)}
      </Profile>

      <Lista>
        <LinkPerson to="/painel">
          <li>
            <IconDashBoard />
            <p>Painel</p>
          </li>
        </LinkPerson>
        <LinkPerson to="textos">
          <li>
            <IconText />
            <p>Textos</p>
          </li>
        </LinkPerson>
        <LinkPerson to="ferramentas">
          <li>
            <IconFerramentas />
            <p>Ferramentas</p>
          </li>
        </LinkPerson>
        <LinkPerson to="linhas">
          <li>
            <IconLinhaDePesquisa />
            <p>Linhas de pesquisa</p>
          </li>
        </LinkPerson>
        <LinkPerson to="membros">
          <li>
            <IconMembros />
            <p>Membros</p>
          </li>
        </LinkPerson>
        <LinkPerson to="noticias">
          <li>
            <IconNoticias />
            <p>Noticias</p>
          </li>
        </LinkPerson>
        <SeparateList />
        <li>
          <IconProfile />
          <p>Perfil</p>
        </li>
        <li>
          <IconSite />
          <p>Site</p>
        </li>
        <li>
          <IconLogout />
          <p>Logout</p>
        </li>
      </Lista>
    </Container>
  );
}
