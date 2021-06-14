import * as React from 'react'

import Container from './Container'
import LinkList from './LinkList'

// styles
const headerStyles = {
  height: '7em',
  paddingTop: '1em',
}

const hiddenHeaderStyles = {
  ...headerStyles,
  opacity: 0,
  touchAction: 'none',
  pointerEvents: 'none',
  '-moz-user-select': 'none',
  '-webkit-user-select': 'none',
}

// data
const links = [
  { to: '/', text: 'Home' },
  { text: 'Talks' },
  { text: 'Blog' },
  { text: 'About' },
]

// markup
const Header = ({ isHome = false }) => {
  return (
    <header style={isHome ? hiddenHeaderStyles : headerStyles}>
      <Container>
        <div>Ruslan Khusnetdinov</div>
        <nav>
          <LinkList items={links} />
        </nav>
      </Container>
    </header >
  )
}

export default Header
