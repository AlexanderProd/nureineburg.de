require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `NurEineBurg - Mode im Zeichen der Burg`,
    description: `Kick off your next, ecommerce experience with this Gatsby starter. This starter ships with credentials to a shopify demo store so you can try it out immediately.`,
    author: `@alexanderhorl`,
    primaryNav: [
      {
        name: 'Produkte',
        link: '/products'
      },
      {
        name: 'Über Uns',
        link: '/page-2',
      },
      {
        name: 'Kontakt',
        link: '/404',
      },
    ],
    secondaryNav: [
      {
        name: 'Versand',
        link: '/versand'
      },
      {
        name: 'Nachhaltigkeit',
        link: '/nachhaltigkeit'
      },
      {
        name: 'Pflegeanleitung',
        link: '/pflegeanleitung'
      },
      {
        name: 'Größentabelle',
        link: '/groesentabelle'
      },
      {
        name: 'Impressum',
        link: '/impressum',
      },
      {
        name: 'Datenschutzerklärung',
        link: '/datenschutzerklaerung',
      },
      {
        name: 'widerrufsbelehrung',
        link: '/widerrufsbelehrung',
      },
      {
        name: 'AGB',
        link: '/agb'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
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
    {
      resolve: `gatsby-source-shopify2`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Old Standard TT', 'Roboto']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-134421805-1",
        anonymize: true,
        respectDNT: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
