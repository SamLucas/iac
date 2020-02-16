import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const ContainerIcon = styled.div`
  background-color: ${props => props.theme.colors.first};
  align-self: center;
  padding: 10px;
  border-radius: 5px;
`;

export const IconLefth = styled(FaAngleLeft).attrs({
  color: "white",
  size: 16
})``;

export const IconRight = styled(FaAngleRight).attrs({
  color: "white",
  size: 16
})``;

export const ContainerNew = styled.div`
  margin: 150px 0px;
  padding: 100px 50px;

  display: grid;
  grid-template-columns: 0.8fr 1fr;
  background-color: ${props => props.theme.colors.first};
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
  min-height: 400px;
  border-radius: 10px;
`;

export const ContentNews = styled.div`
  min-height: 230px;
`;

export const Linkto = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const CotentNews = styled.div`
  padding: 10px;
  margin: 10px 0px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.07);
`;

export const NewsTitle = styled.div`
  font-size: 20px;
  margin: 5px 0px 20px;
`;

export const ContainerNewsTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
  cursor: pointer;
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
  background-color: ${props =>
    props.ativo ? props.theme.colors.first : props.theme.colors.back};
  border-radius: 5px;
  margin: 0px 5px;
`;
