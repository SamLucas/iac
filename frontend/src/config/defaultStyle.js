import styled from "styled-components";
import Theme from "./theme";

import { GoPlus } from "react-icons/go";

export const Container = styled.div`
  margin: 130px;
`;

export const InputSubmit = styled.input.attrs({
  type: "submit"
})`
  color: white;
  display: flex;
  flex: 1;
  border-radius: 10px;
  padding: 15px;
  background-color: ${Theme.colors.first};
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border-width: 0px;
`;

export const InputGeneric = styled.input`
  margin: 10px 0px;
  padding: 15px;
  border: 0;
  background-color: ${Theme.colors.background};
  border-radius: 10px;
`;

export const ContainerSwitch = styled.div`
  width: 80%;

  background-color: white;
  border-radius: 15px;
  margin-left: 20px;
  padding: 20px;
`;

export const ButtonAdd = styled(GoPlus)`
  color: white;
  background-color: ${Theme.colors.first};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 20px;
  padding: 15px;
  text-align: center;
  display: block;
  position: fixed;
  cursor: pointer;
  right: 50px;
  bottom: 50px;
`;
