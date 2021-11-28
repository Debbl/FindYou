import React, { useEffect, useState } from 'react';
import { HomeLayoutStyled } from './layout.styled';
import MenuCate from '../menu-cate';
import AppItemCate from '../app-item-cate';
import useFormatData from '../../hooks/use-format-data';
import AboutMeFooter from '../about-me-footer';
import PopUps from '../pop-ups';
import useLocalStorage from '../../hooks/use-local-storage';
import HomeHeader from '../home-header';

function HomeLayout() {
  const ItemsListData = useFormatData();
  const [isShow, setIsShow] = useLocalStorage('isShow', '1');

  return (
    <HomeLayoutStyled>
      {isShow === '1' ? <PopUps setIsShow={setIsShow} /> : null}
      <HomeHeader setIsShow={setIsShow} />
      <div className="show-menu-cate">
        <MenuCate ItemsListData={ItemsListData} />
      </div>
      <div className="show-cate">
        {ItemsListData.map((cate) => (
          <AppItemCate id={cate.id} key={cate.cateName} cate={cate} />
        ))}
      </div>
      <AboutMeFooter />
    </HomeLayoutStyled>
  );
}

export default HomeLayout;
