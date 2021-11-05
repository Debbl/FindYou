import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      {post.frontmatter.title}
    </div>
  )
}

export const query = graphql`
  query ($slug: String, $title: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}, title: {eq: $title}}) {
      frontmatter {
        slug
        title
      }
    }
  }
`