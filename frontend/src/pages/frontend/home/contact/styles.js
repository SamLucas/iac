import styled from "styled-components";
import Theme from "src/config/Theme";

// estilos contato
export const ContainerContact = styled.div`
  justify-content: space-around;
  padding: 0px 150px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 10px;
  margin-top: 40px;
`;

export const Info = styled.div`
  padding: 0px 40px;
`;
export const InfoTitle = styled.div``;
export const ContentInfo = styled.div`
  margin: 30px 0px;
`;

export const ContentTittle = styled.p`
  font-weight: bold;
  padding: 10px 0px;
`;

export const ContentDescribe = styled.div``;

export const Mensage = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
`;

export const TextInput = styled.input`
  margin: 10px 0px;
  padding: 15px;
  border: 0;
  background-color: ${Theme.back};
  border-radius: 10px;
`;

export const TextInputArea = styled.textarea`
  margin: 10px 0px;
  padding: 10px;
  border: 0;
  background-color: ${Theme.back};
  border-radius: 10px;
  height: 150px;
`;

export const ContactTitle = styled.p`
  font-size: 20px;
  margin: 5px 0px 10px;
`;

export const ContatoDescribe = styled.p`
  width: 60%;
`;

export const Button = styled.button`
  color: white;
  display: flex;
  flex: 1;
  border-radius: 10px;
  padding: 15px;
  background-color: ${props => props.theme.first};
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border-width: 0px;
`;
