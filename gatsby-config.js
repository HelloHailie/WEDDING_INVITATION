module.exports = {
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wedding Invitation`,
        short_name: `Wedding`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
  ]
};