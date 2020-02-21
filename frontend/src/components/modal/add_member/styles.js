import styled from "styled-components";

import { FiCamera } from "react-icons/fi";

export const Container = styled.div`
  padding: 5px;
  width: 80vw;

  .contentForm {
    margin: 20px 0px;
    display: flex;
    flex-direction: row;

    .contentPhoto {
      display: flex;
      width: 300px;
      height: 400px;
      border: 5px dashed ${props => props.theme.colors.background};
      border-radius: 25px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 20px;
      cursor: pointer;

      input {
        display: none;
      }
    }
    .contentData {
      margin-left: 20px;
      width: 70%;

      input {
        width: 100%;
        margin-left: -2px;
      }

      .groupInputs {
        margin-bottom: 20px;

        .editorClassName {
          height: 200px;
          width: 100%;
        }
        p {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
          cursor: pointer;

          .switch {
            margin-top: -2px;
            margin-right: 10px;
          }
        }

        h4 {
          margin-bottom: 10px;
        }
      }
    }
  }

  input {
    margin: 10px 0px 0 5px;
    padding: 10px 15px;
    border-radius: 15px;
    border-width: 0px;
    background-color: ${props => props.theme.colors.background};
  }
`;

export const IconCam = styled(FiCamera)`
  margin: 20px 0;
  font-size: 60px;
  color: ${props => props.theme.colors.first};
`;
