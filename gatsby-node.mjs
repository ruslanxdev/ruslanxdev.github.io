import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve('./src/templates/page.js')
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  posts.forEach(node => {
    let template = pageTemplate

    if (node.internal.contentFilePath.includes('content/blog')) {
      template = blogPostTemplate
    }

    createPage({
      path: node.fields.slug,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id
      },
    })
  })
}

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    let prefix = ''
    const nodeFilePath = createFilePath({ node, getNode })

    if (node.internal.contentFilePath.includes('content/blog')) {
      prefix = '/blog'
    }

    createNodeField({
      name: 'slug',
      node,
      value: `${prefix}${nodeFilePath}`,
    })
  }
}
