import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

import api from "src/services/api";

import { Container, ContainerLogin, Form } from "./styles";
import { InputGeneric, InputSubmit } from "src/config/DefaultStyle";

import LoginSvg from "src/assets/svgs/Login.svg";

export default function Login() {
  const [dataForm, setDataForm] = useState({ email: "", senha: "" });
  const [hiddenPass, setHiddenPass] = useState(false);
  const [hiddenButton, setHiddenButton] = useState(false);

  // let history = useHistory();

  const changeData = e => {
    const { name, value } = e.target;

    name === "senha" && value !== ""
      ? setHiddenButton(true)
      : setHiddenButton(false);

    dataForm[name] = value;
    setDataForm(dataForm);
  };

  const handleSubmite = async e => {
    e.preventDefault();

    await api
      .post("/login", dataForm)
      .then(data => {
        localStorage.setItem("dataUser", JSON.stringify(data.data));
        // history.push("/painel");
      })
      .catch(data => alert("Login inválido!"));
  };

  return (
    <Container>
      <ContainerLogin>
        <div className="contentInfo">
          <img src={LoginSvg} alt="" />
        </div>
        <div className="contentAuth">
          <h1>Login</h1>

          <Form onSubmit={handleSubmite}>
            <InputGeneric
              placeholder="Digite seu email..."
              type="email"
              name="email"
              id="email"
              onChange={changeData}
            />

            <InputGeneric
              placeholder="Digite sua senha..."
              type={hiddenPass ? "text" : "password"}
              name="senha"
              id="senha"
              onChange={changeData}
            />

            {hiddenButton && (
              <span
                onMouseUp={() => setHiddenPass(false)}
                onMouseDown={() => setHiddenPass(true)}
              >
                {!hiddenPass ? "MOSTRA" : "OCUTAR"}
              </span>
            )}

            <p>Esqueceu suas credenciais de acesso?</p>

            <InputSubmit
              type="submit"
              disabled={dataForm.email && dataForm.email ? false : true}
              value="Enviar"
            />
          </Form>
        </div>
      </ContainerLogin>
    </Container>
  );
}
