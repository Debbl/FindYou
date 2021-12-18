import React from 'react';
import { ScrollTopButtonStyled } from './scroll-top-button.styled';

function ScrollTopButton({ element }) {
  const scrollUp = (e) => {
    if (!e) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      e.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ScrollTopButtonStyled>
      <button onClick={() => scrollUp(element)}>
        <i></i>
      </button>
    </ScrollTopButtonStyled>
  );
}

export default ScrollTopButton;
