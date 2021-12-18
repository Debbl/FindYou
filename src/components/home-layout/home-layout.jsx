import React, { useRef, useState } from 'react';
import { HomeLayoutStyled } from './layout.styled';
import MenuCate from '../menu-cate';
import AppItemCate from '../app-item-cate';
import useFormatData from '../../hooks/use-format-data';
import AboutMeFooter from '../about-me-footer';
import PopUps from '../pop-ups';
import useLocalStorage from '../../hooks/use-local-storage';
import HomeHeader from '../home-header';
import ScrollTopButton from '../scroll-top-button';
import { Animated } from 'react-animated-css';

function HomeLayout() {
  const ItemsListData = useFormatData();
  const [isShow, setIsShow] = useLocalStorage('isShow', '1');
  const [actionCate, setActionCate] = useState();
  const mainRef = useRef();

  return (
    <HomeLayoutStyled>
      {isShow === '1' ? <PopUps setIsShow={setIsShow} /> : null}
      <HomeHeader setIsShow={setIsShow} />
      <main className="show-main" ref={mainRef}>
        <div className="main-wrapper">
          <div className="show-menu-cate">
            <MenuCate
              ItemsListData={ItemsListData}
              actionCate={actionCate}
              setActionCate={setActionCate}
            />
          </div>
          <Animated
            animationIn="bounceInLeft"
            animationOut="fadeOut"
            isVisible={true}
          >
            <div className="show-cate">
              {ItemsListData.filter((cate) => {
                if (!actionCate) {
                  return true;
                } else {
                  return actionCate === cate.id;
                }
              }).map((cate) => (
                <AppItemCate id={cate.id} key={cate.cateName} cate={cate} />
              ))}
            </div>
          </Animated>
        </div>
      </main>
      <AboutMeFooter />
      <ScrollTopButton element={mainRef} />
    </HomeLayoutStyled>
  );
}

export default HomeLayout;
