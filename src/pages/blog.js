import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SubHeader from '../components/SubHeader'

const linkListStyles = {}

const linkListItemStyles = {}

// markup
const Page = ({ data }) => {
  return (
    <Layout pageTitle="Блог">
      <ul style={linkListStyles}>
        {
          data.allMdx?.nodes?.map((node, i) => (
            <li style={linkListItemStyles} key={i}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link> <SubHeader type={3}>{node.frontmatter.date}</SubHeader>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx (
      filter: { internal: { contentFilePath: { regex: "/content\/blog/" } } },
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "D MMMM, YYYY", locale: "ru")
          title
          description
        }
      }
    }
  }
`

export default Page
