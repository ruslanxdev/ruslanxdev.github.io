import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

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

const pageStyles = {
  maxWidth: '52em',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: '2em',
  paddingLeft: '2em',
}

// markup
const Layout = ({ pageTitle, isHome, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <title>{pageTitle}</title>
      <Header isHome={isHome} />
      <main style={pageStyles}>
        {children}
      </main >
      <Footer />
    </React.Fragment>
  )
}

export default Layout
