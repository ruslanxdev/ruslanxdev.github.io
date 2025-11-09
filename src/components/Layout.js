import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { createGlobalStyle } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet'

import { Link } from 'gatsby'

import SubHeader from './SubHeader.js'
import Container from './Container.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Cover from './Cover.js'

const shortcodes = {
  SubHeader,
  Link
}

// styles
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: #fff;
    color-scheme: light;
  }

  body {
    background-color: #fff;
    color: #232129;
    font-family: -apple-system, BlinkMacSystemFont , 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    margin: 0;
    line-height: 1;
    overflow-x: hidden;
  }

  main {
    font-size: 1.125rem;
    line-height: 1.34;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    margin-bottom: 1rem;
    line-height: 1;
  }

  h1 {
    margin-top: 3rem;
    font-size: 3rem;
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
    font-size: 1.4375rem;
  }

  ul {
    margin-top: 0.25rem;
    padding-inline-start: 2rem;
  }
`

// markup
export const Layout = ({ title, cover, pageTitle, isHome, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (!pageTitle) {
    if (title === data.site?.siteMetadata?.title) {
      pageTitle = title
    } else {
      pageTitle = `${title} — ${data.site?.siteMetadata?.title}`
    }
  }

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <Header isHome={isHome} />
      <main>
        <Container>
          {cover && <Cover data={cover} />}
          <h1>{title}</h1>
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