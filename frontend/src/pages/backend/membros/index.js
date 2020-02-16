import React, { useEffect, useState } from "react";
import {
  ContainerSwitch,
  ButtonAdd,
  InputGeneric
} from "src/config/defaultStyle";
import DataTable from "react-data-table-component";

import {
  ContentExpand,
  ContainerExpand,
  IconAlter,
  IconLixeira
} from "./styles";

import api from "src/services/api";

export default function Membros() {
  const [dataMembers, setDataMembers] = useState([]);

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

  const ExpandTable = ({ data }) => (
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
          <IconAlter />
          <IconLixeira />
        </div>
      </ContentExpand>
    </ContainerExpand>
  );

  return (
    <>
      <ContainerSwitch>
        {console.log(dataMembers)}

        <DataTable
          // title="Membros"
          columns={columns}
          data={dataMembers}
          Clicked
          // Selected={data => console.log(data)}
          // selectableRows
          pagination={true}
          paginationPerPage={10}
          expandableRows={true}
          expandOnRowClicked={true}
          expandableRowsComponent={<ExpandTable />}
          subHeader={true}
          subHeaderComponent={
            <InputGeneric
              type="text"
              style={{ marginTop: -170, marginBottom: -130, width: 250 }}
              placeholder="Digite o nome de um membro..."
            />
          }
          subHeaderComponent={<h2>Testando</h2>}
          subHeaderAlign={"left"}
          noHeader={true}
          // subHeaderAlign={"right"}
          fixedHeader={false}
        />
      </ContainerSwitch>
      <ButtonAdd />
    </>
  );
}
