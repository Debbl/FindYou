import styled from 'styled-components';

const ScrollTopButtonStyled = styled.div`
  position: fixed;
  right: 8vw;
  bottom: 10vh;

  button {
    width: 38px;
    height: 38px;
    box-shadow: 0.2rem 0.2rem 0.4rem var(--greyLight-2),
      -0.2rem -0.2rem 0.4rem var(--white);
    i {
      display: inline-block;
      transform-origin: center 5px;
      border-bottom: 10px solid #ccc;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
    }
  }
`;

export { ScrollTopButtonStyled };
