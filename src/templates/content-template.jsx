import React, { useEffect } from "react"
import { graphql } from "gatsby"

export default function MarkdownContentTemplate({ data }) {
  const { html } = data.markdownRemark;
  const { title } = data.markdownRemark.frontmatter;

  useEffect(() => {
    document.title = title;
  }, [title]);

  console.log(data);
  return (
    <div
      dangerouslySetInnerHTML={{__html: html}}>
    </div>
  )
}

export const query = graphql`
  query ($html: String, $title: String) {
    markdownRemark(html: {eq: $html}, frontmatter: {title: {eq: $title}}) {
      html
      frontmatter {
        title
      }
    }
  }
`