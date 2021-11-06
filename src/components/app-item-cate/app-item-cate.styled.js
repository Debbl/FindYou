import styled from 'styled-components';


const AppItemCateStyled = styled.div`
  display: flex;
  flex-direction: column;
  .cate-title {
    margin-right: 30px;
    line-height: 60px;
    color: #6b7184;
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px rgba(0,0,0,.2) solid;
  }
  .items-show {
    align-items: center;
    text-align: center;
  }
`

export {
  AppItemCateStyled
}