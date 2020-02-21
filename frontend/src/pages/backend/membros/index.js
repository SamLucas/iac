import React, { useEffect, useState } from "react";
import { ContainerSwitch, ButtonAdd } from "src/config/defaultStyle";

import {
  ContentExpand,
  ContainerExpand,
  IconAlter,
  IconLixeira
} from "./styles";

import DataTable from "react-data-table-component";

import api from "src/services/api";
import ModalExcluir from "src/components/modal/excluir";
import ModalAddMember from "src/components/modal/add_member";

export default function Membros() {
  const [dataMembers, setDataMembers] = useState([]);
  const [dataMember, setDataMember] = useState({});

  const [modalExc, setModalExc] = useState(false);
  const [modalData, setModalData] = useState(false);

  const columns = [
    {
      name: "Nome",
      selector: "name",
      sortable: true
    },
    {
      name: "Email",
      selector: "email",
      sortable: true
    }
  ];

  useEffect(() => {
    async function loadData() {
      await api.get("/usuarios").then(data => setDataMembers(data.data));
    }

    loadData();
  }, []);

  const ExpandTable = ({ data }) => {
    setDataMember(data);
    return (
      <ContainerExpand>
        <ContentExpand>
          <img
            src={
              data.foto_url != null
                ? `${process.env.REACT_APP_API_URL}/files/members/${data.foto_url}`
                : "https://picsum.photos/300/400"
            }
            alt={data.name}
          />
          <div>
            <div className="contentInfo">
              <h3>{data.name}</h3>
              <p>{data.email}</p>
            </div>

            <p>{data.descricao}</p>
            <a href={data.lattes}>Link curriculum lattes</a>
          </div>
          <div className="actions">
            <IconAlter onClick={() => setModalData(true)} />
            <IconLixeira
              onClick={() => {
                setModalExc(true);
              }}
            />
          </div>
        </ContentExpand>
      </ContainerExpand>
    );
  };

  return (
    <>
      <ContainerSwitch>
        {console.log(dataMembers)}

        <DataTable
          columns={columns}
          data={dataMembers}
          Clicked
          expandableRows={true}
          expandOnRowClicked={true}
          expandableRowsComponent={<ExpandTable />}
          subHeader={true}
          subHeaderComponent={<h2>Membros</h2>}
          subHeaderAlign={"left"}
          noHeader={true}
        />

        <ModalExcluir
          stateModal={modalExc}
          onDelete={() => alert("sem função parça.")}
          mensage={
            <p>
              Deseja excluir o membro: <strong>{dataMember.name}</strong>
            </p>
          }
        />

        <ModalAddMember stateModal={modalData} data={dataMember} />
      </ContainerSwitch>
      <ButtonAdd onClick={() => setModalData(true)} />
    </>
  );
}
