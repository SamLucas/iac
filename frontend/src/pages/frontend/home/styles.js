import styled from "styled-components";
import Theme from "../../../config/Theme";

export const Container = styled.div``;

export const IdentifySession = styled.h3`
  color: ${Theme.first};
`;

// estilos header
export const Header = styled.div`
  padding: 150px 0px 150px 150px;
`;

export const Title = styled.h2`
  font-size: 40px;
  width: 60%;
`;

export const DescribeHeader = styled.p`
  width: 40%;
  margin: 10px 0px 30px 0px;
`;

export const Link = styled.a`
  font-size: 16px;
  color: white;
  padding: 10px 40px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${Theme.first};
`;
