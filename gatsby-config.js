module.exports = {
  pathPrefix: `/WEDDING_INVITATION`,
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://hellohailie.github.io`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "weddingInvitation",
        short_name: "Wedding",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/favicon.png", 
        icons: [
          {
            src: "src/images/favicon.png",
            sizes: "48x48",
            type: "image/png",
          },
        ],
      },
    },
  ],
};
