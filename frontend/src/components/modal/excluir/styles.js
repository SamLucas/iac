import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  width: 350px;

  p {
    margin: 10px 0 20px;
  }

  div {
    float: right;
  }

  button {
    margin: 10px 0px 0 5px;
    padding: 10px 15px;
    border-radius: 15px;
    border-width: 0px;
    color: white;
    cursor: pointer;
  }

  .cancelar {
    background-color: ${props => props.theme.colors.success};
  }
  .deletar {
    background-color: ${props => props.theme.colors.danger};
  }
`;
