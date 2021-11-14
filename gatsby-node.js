exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              URL
              category
              categoryName
              description
              imageSrc
              slug
              title
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const html = edge.node.html;
    const { slug, title, description } = edge.node.frontmatter;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/content-template.jsx`),
      context: {
        html,
        title,
        description
      },
    })
  })
}