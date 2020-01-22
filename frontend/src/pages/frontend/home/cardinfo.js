import styled from "styled-components";
import Theme from "../../../config/Theme";

// estilos card info
export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const ContainerInfo = styled.div`
  width: 300px;
  padding: 20px;
  border: 2px solid white;
  text-align: center;
  margin: auto 20px;
  border-radius: 15px;

  &:hover {
    border-color: rgba(0, 0, 0, 0.06);
    box-shadow: 3px 3px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;
export const Name = styled.div`
  color: ${Theme.first};
  font-weight: bold;
  margin-bottom: 10px;
`;
export const Describe = styled.div``;
export const Image = styled.img`
  width: 200px;
  height: 200px;
`;
