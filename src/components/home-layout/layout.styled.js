import styled from 'styled-components';

const HomeLayoutStyled = styled.div`
  .show-main {
    margin-top: 8vh;
    padding-bottom: 12px;
    width: 100vw;
    height: 86vh;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      background-color: #c3c3c3;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    .main-wrapper {
      margin: 0 auto 3vh auto;
      width: 80vw;
    }
  }
`;

export { HomeLayoutStyled };
