import { dirname } from 'path'
import { fileURLToPath } from 'url'
import remarkGfm from 'remark-gfm'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: 'Руслан Хуснетдинов',
    siteUrl: 'https://ruslanx.dev',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [
            remarkGfm
          ],
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/images/icon.png`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages-mdx',
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`,
      },
    },
  ],
}

export default config
