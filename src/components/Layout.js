import * as React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { createGlobalStyle } from 'styled-components'
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"

import Container from './Container.js'
import Header from './Header.js'
import Footer from './Footer.js'

const shortcodes = { Link }

// styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: #232129;
    font-family: -apple-system, BlinkMacSystemFont , 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    margin: 0;
    line-height: 1;
    overflow-x: hidden;
  }

  main {
    font-size: 1.25rem;
  }

  p {
    line-height: 1.34;
  }

  h1 {
    font-size: 3rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }
`

// markup
export const Layout = ({ pageTitle, isHome, children }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (data?.site?.siteMetadata?.title) {
    pageTitle = data.site.siteMetadata.title
  }

  return (
    <>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header isHome={isHome} />
      <main>
        <Container>
          <h1>{pageTitle}</h1>
          <MDXProvider components={shortcodes}>
            {children}
          </MDXProvider>
        </Container>
      </main >
      <Footer />
    </>
  )
}

export default Layout