import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

import Container from './Container'
import Header from './Header'
import Footer from './Footer'

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

  h1 {
    font-size: 3em;
    margin-top: 1em;
    margin-bottom: .5em;
  }

  p {
    line-height: 1.34;
  }
`

// markup
const Layout = ({ pageTitle, isHome, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header isHome={isHome} />
      <main>
        <Container>
          {children}
        </Container>
      </main >
      <Footer />
    </React.Fragment>
  )
}

export default Layout
