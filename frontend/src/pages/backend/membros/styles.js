import styled, { css } from "styled-components";

import { FiTrash2 } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";

export const Container = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
`;

export const ContainerExpand = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.background};
`;

export const ContentExpand = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 15px;
  background-color: white;

  img {
    width: 300px;
    height: 400px;
    border-radius: 10px;
    margin-right: 25px;
  }

  div.contentInfo {
    margin-bottom: 25px;
  }

  p {
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.colors.first};
    font-weight: bold;
    margin-top: 800px;
  }

  div.actions {
    display: flex;
    flex-direction: row;
  }
`;

const DefaultStylesIcons = css`
  font-size: 18px;
  margin-right: 10px;
  cursor: pointer;
`;

export const IconLixeira = styled(FiTrash2)`
  ${DefaultStylesIcons}
  &:hover {
    color: ${props => props.theme.colors.danger};
  }
`;

export const IconAlter = styled(TiPencil)`
  ${DefaultStylesIcons}
  &:hover {
    color: ${props => props.theme.colors.success};
  }
`;
