import styled from 'styled-components';

const HomeHeaderStyled = styled.header`
  position: fixed;
  top: 0;
  height: 8vh;
  width: 100vw;
  font-weight: 1000;
  border-bottom: 1px solid #c3c3c3;
  box-shadow: 0.2rem 0.2rem 0.4rem var(--greyLight-2),
    -0.2rem -0.2rem 0.4rem var(--white);
  background-color: #99ccff;
  overflow: hidden;
  min-height: 30px;
  a {
    padding-left: 10px;
    font-size: 30px;
    line-height: 8vh;
    text-align: center;
  }
  button {
    position: absolute;
    right: 12px;
    top: 50%;
    padding: 6px 10px;
    border-radius: 3px;
    transform: translateY(-50%);
  }
`;

export { HomeHeaderStyled };
