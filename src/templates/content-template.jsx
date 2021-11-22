import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../components/content-layout/content-layout';

export default function MarkdownContentTemplate({ data }) {
  const { html } = data.markdownRemark;
  const { title, description } = data.markdownRemark.frontmatter;

  useEffect(() => {
    document.title = 'Find You ' + title;
  }, [title]);

  console.log(data);
  return <ContentLayout title={title} description={description} html={html} />;
}

export const query = graphql`
  query ($html: String, $title: String, $description: String) {
    markdownRemark(
      html: { eq: $html }
      frontmatter: { title: { eq: $title }, description: { eq: $description } }
    ) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
