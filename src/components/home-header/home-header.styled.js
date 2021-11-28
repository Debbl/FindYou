import styled from 'styled-components';

const HomeHeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid #c3c3c3;
  background-color: #99ccff;
  a {
    padding-left: 10px;
    font-size: 30px;
    line-height: 60px;
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
