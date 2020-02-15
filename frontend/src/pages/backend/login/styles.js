import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  height: 60vh;
  width: 80%;

  div {
    border-radius: 10px;
    width: 50%;
  }

  div.contentAuth {
    padding: 20px 30px;
    h1 {
      margin: 20px 0;
    }
  }

  div.contentInfo {
    display: flex;
    background-color: ${props => props.theme.colors.first};
    justify-content: center;
    img {
      width: 70%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > p {
    margin-bottom: 40px;
    margin-top: 5px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  span {
    display: block;
    position: relative;
    margin-top: -44px;
    margin-left: 85%;
    margin-bottom: 26px;
    float: right;
    cursor: pointer;
    color: ${props => props.theme.colors.first};
  }
`;
