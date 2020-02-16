import React, { useState } from "react";
import api from "src/services/api";
import {
  ContainerContact,
  Info,
  ContactTitle,
  ContatoDescribe,
  Row,
  ContentInfo,
  ContentTittle,
  ContentDescribe,
  Mensage,
  Form,
  TextInputArea
} from "./styles";

import { InputGeneric, InputSubmit } from "src/config/defaultStyle";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IdentifySession } from "../styles";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  const senMensage = async data => await api.post("/contact", data);

  const handleSubmite = e => {
    e.preventDefault();

    if (name && email && assunto && mensagem) {
      let data = {
        name,
        email,
        assunto,
        mensagem
      };

      setName("");
      setEmail("");
      setAssunto("");
      setMensagem("");

      toast.success(
        "Sua mensagem foi enviada com sucesso em breve, entraremos em contato."
      );

      senMensage(data);
    } else {
      toast.error("Preencha todos dados para enviar a sua mensagem!");
    }
  };

  return (
    <ContainerContact id="contato">
      <ToastContainer />
      <IdentifySession>Contato</IdentifySession>
      <ContactTitle>Entre em contato!</ContactTitle>
      <ContatoDescribe>
        Todas as nossas formas de contato estão aqui em baixo, use a que melhor
        se encaixa com você! Preencha todos os dados para enviar a sua mensagem.
      </ContatoDescribe>
      <Row>
        <Mensage>
          <IdentifySession>Envie uma mensagem</IdentifySession>
          <Form onSubmit={handleSubmite}>
            <InputGeneric
              placeholder={"Seu nome completo..."}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <InputGeneric
              placeholder={"Seu melhor email..."}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <InputGeneric
              placeholder={"Digite o assunto..."}
              value={assunto}
              onChange={e => setAssunto(e.target.value)}
            />
            <TextInputArea
              placeholder={"Digite sua mensagem..."}
              value={mensagem}
              onChange={e => setMensagem(e.target.value)}
              row="10"
            />
            <InputSubmit value="Enviar" />
          </Form>
        </Mensage>
        <Info>
          <IdentifySession>Informações para contato</IdentifySession>

          <ContentInfo>
            <ContentTittle>Onde nos encontrar</ContentTittle>
            <ContentDescribe>
              Estrada de Muzambinho, Bairro - Morro Preto, Muzambinho - MG,
              37890-000
            </ContentDescribe>
          </ContentInfo>

          <ContentInfo>
            <ContentTittle>Envie um email para</ContentTittle>
            <ContentDescribe>
              ricardo.marques@muz.ifsuldeminas.edu.br
            </ContentDescribe>
          </ContentInfo>
        </Info>
      </Row>
    </ContainerContact>
  );
}
