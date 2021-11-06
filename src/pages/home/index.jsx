import React from 'react';
import { HomeStyled } from './home.styled';
import { getItemsListData } from '../../common/items.date';
import MenuCate from '../../components/menu-cate';
import AppItemCate from '../../components/app-item-cate';
import useFormatData from '../../hooks/use-format-data';

function Home() {
  const ItemsListData = useFormatData();

  return (
    <HomeStyled>
      <div  className="show-menu-cate">
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

export default Home;