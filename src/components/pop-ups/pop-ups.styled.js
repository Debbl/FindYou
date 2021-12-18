import styled from 'styled-components';

const PopUpsStyled = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(102, 102, 102, 0.6);
  z-index: 9;

  .show-pops-container {
    position: relative;
    width: 80vw;
    height: 40vw;
    border-radius: 40px;
    background-color: #a1a7b7;
    img {
      width: 100%;
      height: 100%;
      border-radius: 3vw;
      user-select: none;
      -webkit-user-drag: none;
    }

    button {
      position: absolute;
      border-radius: 6px;
      top: 2vw;
      right: 3vw;
      padding: 1vw 3vw;
      font-size: 10px;
      font-weight: 600;
      color: red;
    }
  }
`;

export { PopUpsStyled };
