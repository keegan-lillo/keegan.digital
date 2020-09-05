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
    // === Transformers ===
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        fileName: `types/graphql.ts`,
        typeCheck: false,
        documentPaths: ['./src/**/*.{ts,tsx}'],
        codegen: !process.env.CI,
        codegenConfig: {
          skipTypename: true,
          maybeValue: 'T',
        },
      },
    },
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

    // === App plugins ===
    `gatsby-plugin-react-helmet`,

    // === Build helpers ===
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/../content/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        delimiters: '```',
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/../cms/cms.ts`,
      },
    },
  ],
}

export default config
