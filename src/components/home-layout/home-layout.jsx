import React from 'react';
import { HomeLayoutStyled } from './layout.styled';
import MenuCate from '../menu-cate';
import AppItemCate from '../app-item-cate';
import useFormatData from '../../hooks/use-format-data';
import AboutMeFooter from '../about-me-footer';

function HomeLayout() {

  const ItemsListData = useFormatData();

  return (
    <HomeLayoutStyled>
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
      <AboutMeFooter />
    </HomeLayoutStyled>
  )
}

export default HomeLayout;