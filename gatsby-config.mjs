import { dirname } from 'path'
import { fileURLToPath } from 'url'
import remarkGfm from 'remark-gfm'

const __dirname = dirname(fileURLToPath(import.meta.url))

const config = {
  siteMetadata: {
    title: 'Руслан Хуснетдинов',
    siteUrl: 'https://ruslanx.ru',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
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
        name: 'Руслан Хуснетдинов',
        short_name: 'Руслан Хуснетдинов',
        description: 'Я продакт-менеджер с 8-летним опытом в разработке. Моя ключевая экспертиза в создании и разработке технически сложных продуктов и управлении кросс-функциональными командами. Умею быстро и недорого тестировать гипотезы, исследовать пользовательский опыт и анализировать данные.',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icon: `${__dirname}/src/images/icon-128.png`,
        icons: [
          {
            "src": "icons/icon-128.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "icons/icon-196.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "icons/icon-196.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "icons/icon-196.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "icons/icon-196.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "icons/icon-512.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "icons/icon-512.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "icons/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
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
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 97534752,
        webvisor: true,
        trackHash: true,
        afterBody: false,
        defer: false,
      },
    },
  ],
}

export default config
