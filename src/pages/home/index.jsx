import React from 'react';

import { getItemsListData } from '../../common/items.date';
import MenuCate from '../../components/menu-cate';
import AppItemCate from '../../components/app-item-cate';
import useFormatData from '../../hooks/use-format-data';
import styled from 'styled-components';
function Home() {
  const ItemsListData = useFormatData();

  return (
    <HomeStyled>
      <div className="show-menu-cate">
        <MenuCate />
      </div>
      <div className="show-cate">
        {
          ItemsListData.map(cate => (
            <AppItemCate
              id={cate.id}
              key={cate.cateName}
              cate={cate}
            />
          ))
        }
      </div>
    </HomeStyled>
  )
}
const HomeStyled = styled.div`
  .show-menu-cate {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 16vw;
    border-right: 2px solid black;
  }
  
  .show-cate {
    margin-left: 20vw;
  }
`


export default Home;