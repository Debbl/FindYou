import styled from 'styled-components';

const PopUpsStyled = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  z-index: 9;
  .show-pops-container {
    width: 600px;
    height: 400px;
    background-color: #a1a7b7;
  }
`;

export { PopUpsStyled };
