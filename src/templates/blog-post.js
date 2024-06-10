import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'

export default function Template({ data, children }) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title} cover={data.mdx.frontmatter.cover}>
      <SubHeader type={2}>{data.mdx.frontmatter.date}</SubHeader>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D MMMM, YYYY", locale: "ru")
        cover {
          childImageSharp {
            gatsbyImageData(width: 160)
          }
        }
      }
    }
  }
`
