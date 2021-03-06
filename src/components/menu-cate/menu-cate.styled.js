import styled from 'styled-components';

const MenuCateStyled = styled.div`
  text-align: center;

  .menu-list-button {
    display: inline-block;
    width: 16vw;
    height: 6vh;
    border: 1px solid #cce6ff;
  }
  .menu-list-button :not(.menu-list-button:first-child) {
    margin-top: 6px;
  }
  .menu-list-button-action {
    background-color: #1a90ff;
  }
`;

export { MenuCateStyled };
