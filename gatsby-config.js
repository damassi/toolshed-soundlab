module.exports = {
  siteMetadata: {
    title: `Toolshed SoundLab`,
    description: `Toolshed SoundLab Recording Studio - I offer music production &amp;amp; recording services at a comfortable studio in the heart of Port Townsend, near Seattle Washington`,
    keywords: `port townsend,recording studio,washington,jefferson county,olympic peninsula,sequim,port angeles,analog,digital,tape transfer,music production,music studio,guitar lesson,luthier,guitar repair,Seattle,best,acoustic,folk,blues,jazz,rock,music production,voice over`,
    author: `Christopher Pappas <damassi.pappas@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-catch-links",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-root-import",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
