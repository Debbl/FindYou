import { graphql, useStaticQuery } from 'gatsby';

function useFormatData() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
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
  `);

  const cateSet = new Set();
  const list = [];

  data.allMarkdownRemark.edges.forEach((edge) => {
    cateSet.add(edge.node.frontmatter.category);
  });

  cateSet.forEach((cate) => {
    list.push({
      id: cate,
      cateName: '',
      items: []
    });
  });

  data.allMarkdownRemark.edges.forEach((edge) => {
    let item = edge.node.frontmatter;
    list.forEach((cate) => {
      if (item.category === cate.id) {
        cate.cateName = item.categoryName;
        cate.items.push({
          itemUrl: item.URL,
          itemImgSrc: item.imageSrc,
          itemTitle: item.title,
          itemDec: item.description
        });
      }
    });
  });

  return list;
}

export default useFormatData;
