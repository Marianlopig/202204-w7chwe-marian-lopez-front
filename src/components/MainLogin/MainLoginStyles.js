import styled from "styled-components";

export const MainLoginStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  .container {
    background-color: #92b5b1;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    display: flex;
    width: 100%;

    .buttons {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      button {
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 30%;
        opacity: 0.9;
        display: flex;
        justify-content: center;
        font-size: 20px;
        border-radius: 15px;
        align-items: center;
        margin: 20px;
      }
      .button-login {
        background-color: #13a375;
      }
      .button-logout {
        background-color: #ec4940;
      }
    }
  }
`;
