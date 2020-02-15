import styled from "styled-components";

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
  background-color: ${props => props.theme.colors.first};
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border-width: 0px;
`;

export const InputGeneric = styled.input`
  margin: 10px 0px;
  padding: 15px;
  border: 0;
  background-color: ${props => props.theme.colors.background};
  border-radius: 10px;
`;

export const ContainerSwitch = styled.div`
  width: 79%;
  margin: 0 auto;
  background-color: white;
  border-radius: 15px;
  padding: 20px;
`;
