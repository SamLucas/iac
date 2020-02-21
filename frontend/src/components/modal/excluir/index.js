import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import { Container } from "./styles";
import CustomStyles from "../customStyles";

export default function Excluir({ stateModal = false, mensage, onDelete }) {
  const [modal, setModal] = useState(stateModal);

  useEffect(() => setModal(stateModal), [stateModal]);

  return (
    <Modal
      isOpen={modal}
      onRequestClose={() => setModal(!modal)}
      style={CustomStyles}
      contentLabel="Example Modal"
    >
      <Container>
        <h2>Deseja Excluir?</h2>
        <p>{mensage}</p>
        <div>
          <button className="cancelar" onClick={() => setModal(!modal)}>
            Cancelar
          </button>
          <button className="deletar" onClick={onDelete}>
            Deletar
          </button>
        </div>
      </Container>
    </Modal>
  );
}
