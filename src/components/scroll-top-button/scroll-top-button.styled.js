import styled from 'styled-components';

const ScrollTopButtonStyled = styled.div`
  position: fixed;
  right: 8vw;
  bottom: 10vh;

  button {
    width: 3vw;
    height: 3vw;
    box-shadow: 0.2rem 0.2rem 0.4rem var(--greyLight-2),
      -0.2rem -0.2rem 0.4rem var(--white);
    i {
      display: inline-block;
      transform-origin: center 5px;
      border-bottom: 0.8vw solid #ccc;
      border-left: 0.8vw solid transparent;
      border-right: 0.8vw solid transparent;
    }
  }
`;

export { ScrollTopButtonStyled };
