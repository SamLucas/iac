import React from "react";
import { useHistory } from "react-router-dom";

// import { Container } from './styles';

export default function Painel() {
  let history = useHistory();

  const Logout = () => {
    alert("asdçjalk");
    localStorage.removeItem("dataUser");
    history.push("/login");
  };

  return <p onClick={() => Logout()}>Logout</p>;
}
