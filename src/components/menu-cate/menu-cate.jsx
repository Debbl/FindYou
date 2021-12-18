import React from 'react';
import { MenuCateStyled } from './menu-cate.styled';

function MenuCate({ ItemsListData, setActionCate, actionCate }) {
  return (
    <MenuCateStyled>
      <button
        className={!actionCate ? 'action-button-cate' : ''}
        onClick={() => setActionCate(undefined)}
      >
        全部
      </button>
      {ItemsListData.map((cate) => (
        <button
          key={cate.id}
          onClick={() => {
            setActionCate(cate.id);
          }}
          className={actionCate === cate.id ? 'action-button-cate' : ''}
        >
          {cate.cateName}
        </button>
      ))}
    </MenuCateStyled>
  );
}

export default MenuCate;
