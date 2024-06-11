import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'

export default function Template({ data, children }) {
  return (
    <Layout
      title={data.mdx.frontmatter.title}
      pageTitle={data.mdx.frontmatter.pageTitle}
      cover={data.mdx.frontmatter.cover}
    >
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
        pageTitle
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
