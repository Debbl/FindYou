import React from 'react';
import '../../assets/css/index.css';
import '../../assets/css/reset.css';
import { ContentLayoutStyled } from './content-layout.styled';
import HomeHeader from '../home-header';
import ScrollTopButton from '../scroll-top-button';

function ContentLayout(props) {
  const { title, description, html } = props;

  return (
    <>
      <HomeHeader />
      <ContentLayoutStyled>
        <div className="show-markdown-title">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div
          className="show-markdown-wrapper"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <ScrollTopButton />
      </ContentLayoutStyled>
    </>
  );
}

export default ContentLayout;
