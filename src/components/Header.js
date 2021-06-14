import * as React from 'react'

import LinkList from './LinkList'

// styles
const headerStyles = {
  maxWidth: '52em',
  height: '8em',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '2em',
  paddingBottom: '2em',
  paddingRight: '2em',
  paddingLeft: '2em',
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
      <div>Ruslan Khusnetdinov</div>
      <nav>
        <LinkList items={links} />
      </nav>
    </header >
  )
}

export default Header
