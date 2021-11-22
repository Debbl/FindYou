import React from 'react';
import { AppItemCateStyled } from './app-item-cate.styled';
import AppItem from './app-item';

function AppItemCate(props) {
  // 一些需要展示的 Item 数据
  const { cateName, items } = props.cate;

  return (
    <AppItemCateStyled id={props.id}>
      <div className="cate-title">{cateName}</div>
      <div className="items-show">
        {items.map((item) => (
          <AppItem key={item.itemTitle} item={item} />
        ))}
      </div>
    </AppItemCateStyled>
  );
}

export default AppItemCate;
