import styled from 'styled-components';

const MenuCateStyled = styled.div`
  margin-top: 3vh;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  .action-button-cate {
    color: #0066ff;
    box-shadow: inset 0.15rem 0.15rem 0.2rem var(--greyLight-2),
      inset -0.15rem -0.15rem 0.2rem #fff;
  }
  button {
    padding: 0.6vw 2vw;
    margin-right: 1vw;
    border-radius: 3px;
    box-shadow: 0.1rem 0.1rem 0.2rem var(--greyLight-2),
      -0.1rem -0.1rem 0.2rem var(--white);
  }
`;

export { MenuCateStyled };
