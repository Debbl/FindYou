module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My Gatsby Site'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Find You`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        icon: `./src/images/icon.png`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`
  ],
  flags: {
    PARALLEL_QUERY_RUNNING: true
  }
};
