import styled from "styled-components";
import Theme from "../../../config/Theme";

export const Container = styled.div`
  margin: 100px;
`;

export const Header = styled.div`
  margin: 100px 0px;
`;

export const HeaderTitle = styled.h3`
  font-size: 40px;
  width: 60%;
`;

export const HeaderDescribe = styled.div`
  font-size: 16px;
`;

export const Lista = styled.div`
  border-right: 1px solid ${Theme.first};
  padding-right: 30px;
`;
export const Itens = styled.div`
  margin: 10px 0px;
  padding: 10px;
  border-radius: 10px;
  color: ${props => (props.ativo ? "white" : "black")};
  background-color: ${props => (props.ativo ? Theme.first : Theme.back)};
  cursor: pointer;
`;

export const ItemName = styled.h4``;
export const ItemDescribe = styled.div`
  color: color: ${props =>
    props.ativo ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.6)"};
  
`;
export const View = styled.div``;
export const Name = styled.p`
  text-align: center;
  font-size: 23px;
  margin: 0px 0px 30px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
`;

export const Describe = styled.div`
  text-align: justify;
`;

export const ProfessoresTitle = styled.div`
  color: ${Theme.first};
  font-weight: bold;
  margin-right: 5px;
`;

export const ContainerLineSearch = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 40px;
`;

export const Table = styled.table`
  width: 100%;
`;
export const Linha = styled.tr``;
export const Coluna = styled.td`
  background-color: ${props => (props.header ? "rgba(0,0,0,0.06)" : "wihte")};
  /* border-right: 1px solid ${Theme.first}; */
  padding: 10px;
`;

export const LinkA = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    text-decoration: underline;
  }
`;
