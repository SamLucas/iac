import styled from "styled-components";
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

export const LoadComponet = styled(ReactLoading).attrs(props => ({
  color: props.theme.colors.first,
  height: 100,
  width: 100,
  type: "bars"
}))`
  margin-bottom: 40px;
`;
