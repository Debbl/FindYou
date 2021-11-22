import React, { useEffect, useState } from 'react';
import { MenuCateStyled } from './menu-cate.styled';

function MenuCate(props) {
  const ItemsListDate = props.ItemsListData;
  const [activeMenuButton, setActiveMenuButton] = useState(ItemsListDate[0].id);

  // 点击页面滑动
  function scrollToAnchor(anchorName) {
    setActiveMenuButton(anchorName);
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  }

  useEffect(() => {
    scrollToAnchor(activeMenuButton);
  }, []);

  return (
    <MenuCateStyled activeMenuButton={activeMenuButton}>
      {ItemsListDate.map((cate) => (
        <button
          className={
            cate.id === activeMenuButton
              ? 'menu-list-button menu-list-button-action'
              : 'menu-list-button'
          }
          key={cate.id}
          onClick={() => scrollToAnchor(cate.id)}
        >
          {cate.cateName}
        </button>
      ))}
    </MenuCateStyled>
  );
}

export default MenuCate;
