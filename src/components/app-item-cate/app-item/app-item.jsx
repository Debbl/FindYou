import React from 'react';
import { AppItemStyled } from './app-item.styled';

function AppItem(props) {

  // 一些需要展示的数据
  const {itemUrl, itemImgSrc, itemTitle, itemDec} = props.item;

  return (
    <AppItemStyled>
      <a className="app-item-link" href={itemUrl}>
        {/* Item 图片和标签 */}
        <div className="app-item-logo">
          <img src={itemImgSrc} alt={itemTitle}/>
          <span>{itemTitle}</span>
        </div>
        {/* Item 介绍 */}
        <div className="app-item-dec">{itemDec}</div>
      </a>
    </AppItemStyled>
  )
}

export default AppItem;