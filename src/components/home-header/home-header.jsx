import React from 'react';
import { HomeHeaderStyled } from './home-header.styled';

function HomeHeader(props) {
  const { setIsShow } = props;
  return (
    <HomeHeaderStyled>
      <a href="/">Find You</a>
      {typeof setIsShow === 'function' ? (
        <button onClick={() => setIsShow('1')}>ABOUT</button>
      ) : null}
    </HomeHeaderStyled>
  );
}

export default HomeHeader;
