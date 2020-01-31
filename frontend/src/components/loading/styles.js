import styled from "styled-components";
import Theme from "../../config/Theme";
import ReactLoading from "react-loading";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Mensagem = styled.p`
  font-size: 16px;
`;

export const LoadComponet = styled(ReactLoading).attrs({
  color: Theme.first,
  height: 100,
  width: 100,
  type: "bars"
})`
  margin-bottom: 40px;
`;