import styled from "styled-components";
import Theme from "../../../config/Theme";

export const ContainerNew = styled.div`
  margin: 150px 0px;
  padding: 100px 50px;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  background-color: ${Theme.first};
  gap: 50px;
`;

export const ImageSeach = styled.img`
  width: 400px;
  align-self: center;
  justify-self: center;
`;

export const ContainerNews = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`;

export const CotentNews = styled.div`
  padding: 10px;
  margin: 10px 0px;
  background-color: rgba(0, 0, 0, 0.07);
`;

export const NewsTitle = styled.div`
  font-size: 20px;
  margin: 5px 0px 20px;
`;

export const ContainerNewsTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const ContainerNewsDescribe = styled.p``;

export const ContainerPagination = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin: 40px 0px 0px;
`;

export const NumberPagination = styled.div`
  padding: 10px 13px;
  color: ${props => (props.ativo ? "white" : "black")};
  background-color: ${props => (props.ativo ? Theme.first : Theme.back)};
  border-radius: 5px;
  margin: 0px 5px;
`;
