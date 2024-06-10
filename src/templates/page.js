import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default function Template({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} cover={data.mdx.frontmatter.cover}>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
