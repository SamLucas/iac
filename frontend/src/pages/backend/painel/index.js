import React from "react";
import { ContainerSwitch } from "src/config/defaultStyle";
import { Outlet } from "react-router-dom";

export default function Painel() {
  return (
    <ContainerSwitch>
      <h1>Painel</h1>
      <Outlet />
    </ContainerSwitch>
  );
}
