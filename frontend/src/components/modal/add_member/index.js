import React, { useState, useEffect } from "react";

import Modal from "react-modal";
import Switch from "react-switch";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { Container, IconCam } from "./styles";
import CustomStyles from "../customStyles";

export default function Excluir({ stateModal, data = null, onDelete }) {
  const [modal, setModal] = useState(false);
  const [dataInput, setDataInput] = useState("");
  const [adm, setAdm] = useState(false);

  useEffect(() => setModal(true), [stateModal]);

  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => setModal(!modal)}
      style={CustomStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <h2>{data ? "Alterar cadastro" : "Adicionar Membro"}</h2>
        <div className="contentForm">
          <label className="contentPhoto">
            <IconCam />
            <p>Selecione uma foto</p>
            <input type="file" />
          </label>
          <form className="contentData">
            <div className="groupInputs">
              <h4>Dados pessoais:</h4>
              <input type="text" placeholder="Nome Completo" />
              <input type="email" placeholder="Seu melhor email..." />

              <p className="contentswitch" onClick={() => setAdm(!adm)}>
                <Switch
                  onChange={() => setAdm(!adm)}
                  checked={adm}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={20}
                  width={40}
                  handleDiameter={20}
                  className="switch"
                />
                Dar permissão de adiminstrador?
              </p>
            </div>

            <div className="groupInputs">
              <h4>Autenticação</h4>
              <input type="password" placeholder="Digite sua senha" />
              <input
                type="password"
                placeholder="Digite novamente para confirmar"
              />
            </div>
            <div className="groupInputs">
              <h4>Descrição do membro </h4>
              <Editor
                // editorState={dataInput}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                // onEditorStateChange={this.onEditorStateChange}
              />
              <input type="text" placeholder="Link do curriculum lattes" />
            </div>
          </form>
        </div>
      </Container>
    </Modal>
  );
}
