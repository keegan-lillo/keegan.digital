/* eslint-disable sort-keys-fix/sort-keys-fix */
import { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    siteName: `Keegan Digital`,
    siteUrl: `https://keegan.digital`,
    title: `Keegan Digital`,
    description: 'The personal website for Keegan Lillo.',
    author: {
      name: 'Keegan Lillo',
      url: 'https://keegan.digital',
      email: 'hello@keegan.digital',
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: false,
        svgo: false,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          localIdentName: '[local]__[1]__[hash:base64:5]',
          localIdentRegExp: /.*\/(.*)\.module\.scss/i,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/../content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `types/graphql.ts`,
        typeCheck: process.env.NODE_ENV === 'production',
        documentPaths: ['./src/**/*.{ts,tsx}'],
        codegenConfig: {
          skipTypename: true,
          maybeValue: 'T',
        },
      },
    },
  ],
}

export default config
