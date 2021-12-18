import styled from 'styled-components';

const AppItemStyled = styled.div`
  float: left;
  margin-top: 20px;
  margin-left: 20px;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
  font-weight: bold;
  background-color: #eee;
  box-shadow: 0.2rem 0.2rem 0.4rem var(--greyLight-2),
    -0.2rem -0.2rem 0.4rem var(--white);

  .app-item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #30333c;

    .app-item-logo {
      display: flex;
      margin-top: 12px;
      line-height: 30px;

      img {
        width: 30px;
        border-radius: 50%;
      }

      span {
        margin-left: 10px;
      }
    }

    .app-item-dec {
      display: -webkit-box;
      margin-top: 12px;
      padding: 0 6px;
      font-size: 12px;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #a1a7b7;
    }
  }

  .app-item-link:hover {
    background-color: #6b7184;
  }
`;

export { AppItemStyled };
