module.exports = {
  siteMetadata: {
    title: `Recipes Homemade`,
    description: `This site contains details of homemade recipes made by Sharon Leshan`,
    author: `@shazyleshan`,
    siteUrl: `https://maleo-recipes-homemade.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-firesource",
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: "Recipe",
            collection: "recipes",
            map: doc => ({
              name: doc.name,
              summary: doc.summary,
              imageUrl: doc.imageUrl,
              cook___NODE: doc.cook.id,
            }),
          },
          {
            type: "Cook",
            collection: "cooks",
            map: doc => ({
              name: doc.name,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-images`,
    //   options: {
    //     nodeType: "Recipe",
    //     imagePath: "imageUrl",
    //   },
    // },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-maleo-recipes-homemade-netlify-app`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}