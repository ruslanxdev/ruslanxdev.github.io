import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'

import SubHeader from './SubHeader.js'
import Container from './Container.js'
import Header from './Header.js'
import Footer from './Footer.js'

const shortcodes = {
  SubHeader,
  Link,
}

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
    font-size: 1.125rem;
    line-height: 1.34;
  }

  h1, h2, h3, h4 {
    margin-bottom: 0;
    line-height: 1;
  }

  h1 span, h2 span, h3 span, h4 span {
    font-weight: normal;
    color: darkgray;
    font-size: 0.777778em;
  }

  h1 {
    margin-top: 3rem;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    margin-top: 2.25rem;
    font-size: 2.25rem;
  }

  h3 {
    margin-top: 1.5rem;
    font-size: 1.75rem;
  }

  h4 {
    margin-top: 1.25rem;
    font-size: 1.375rem;
  }

  blockquote {
    margin-left: 0;
    margin-right: 0;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 0;
  }

  ul {
    margin-top: 0.25rem;
    padding-inline-start: 2rem;
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