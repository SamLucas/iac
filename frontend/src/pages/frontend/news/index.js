import React from "react";
import { Container } from "src/config/DefaultStyle";
import { Describe, Header, HeaderTitle, HeaderDescribe } from "./styles";

import Menu from "../../../components/menu";

export default function News({ hystory }) {
  return (
    <>
      <Menu hystory={hystory} />
      <Container>
        <Header>
          <HeaderTitle>
            Tutorial: como fazer o upgrade do Windows 10 Home para o Windows 10
            Pro
          </HeaderTitle>
          <HeaderDescribe>04/04/2016 às 10:37 - Ramon Voltolini</HeaderDescribe>
        </Header>

        <Describe>
          Máquinas que executam o Windows 7, Windows 8 e Windows 8.1 podem fazer
          a atualização gratuita para o Windows 10, já sabemos. No entanto,
          somente usuários que possuem uma chave válida do produto (Product Key)
          estão habilitados a rodar a versão completa da mais recente versão do
          SO sem tipo algum de restrição. Para que o upgrade do Windows 10 Home
          seja feito, basta, portanto, adquirir uma licença ou um direito
          digital através da própria Loja da Microsoft. Neste tutorial, você vai
          aprender a atualizar seu computador para o Windows 10 Pro de um jeito
          rápido e fácil. Antes de seguir rumo à execução do processo listado
          abaixo, porém, certifique-se de que a versão do seu sistema Home é a
          1511 (clique aqui e saiba mais). Sua máquina está habilitada?
          Identificar a versão do seu Windows 10 Home é fácil. Aperte a tecla
          “Windows” ou clique o Menu Iniciar. Abra o aplicativo “Configurações”
          e siga por Sistema/Sobre. Consulte, então, o campo “Versão” e pronto.
          Se o número 1511 for exibido, sua máquina já poderá ser atualizada.
          Saiba mais sobre a versão 1511 lançada em novembro para o Windows 10
          aqui. Compre uma licença da versão Pro Aperte o botão “Windows” ou
          clique sobre o ícone de janela para a ativação do Menu Iniciar e abra
          as “Configurações”. Em seguida, clique sobre “Atualização e segurança”
          e então em “Ativação”. Aperte o botão "Windows" para abrir o Menu
          Iniciar. Clique em "Atualização e segurança". Por fim, abra as opções
          de “Loja” e adquiria sua licença para o Windows 10 Pro por R$ 389,99
          (para quem já possui uma cópia habilitada para o upgrade). Clique em
          "Ir para a Loja" para comprar uma licença ou insira sua Product Key.
          Arremate a compra, informando, na tela seguinte, seus dados bancários.
          Insira sua Product Key Usuários que possuem uma chave dedicada à
          atualização para a versão completa do Windows 10 podem informar o
          código em “Alterar chave do produto (Product Key)” ainda em
          “Ativação”. Insira sua Product Key no campo indicado acima.
          Atualização para o Enterprise A atualização do Windows 10 Pro para o
          Windows 10 Enterprise (ou Windows 10 para empresas) deve ser feita a
          partir da compra de um novo pacote. Clique aqui e confira todos os
          detalhes acerca do software dedicado a companhias. Ainda não atualizou
          para o Windows 10? Sua máquina não foi ainda atualizada? Então confira
          um passo a passo completo sobre como instalar a nova versão do Windows
          em seu computador nesta página. Consulte a lista de requisitos
          mínimos, faça o backup de seus dados e inicie o download e instalação
          do sistema que promete integração total entre tablets, PCs e
          smartphones agora!
        </Describe>
      </Container>
    </>
  );
}
