import styled from "styled-components";
import Theme from "../../config/Theme";
import { Link } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 30px 40px;
  justify-content: flex-end;
`;

export const Li = styled.li`
  padding: 10px 20px;
  list-style: none;
  font-size: 16px;
  border-bottom: 2px solid ${props => (props.ativo ? Theme.first : "white")};
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${Theme.first};
  }
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  color: black;
`;
