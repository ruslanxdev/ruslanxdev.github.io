import * as React from 'react'
import { Link } from 'gatsby'

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

const navListStyles = {
  height: '1em',
  listStyleType: 'none',
  paddingLeft: 0,
}

const navListItemStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginRight: 15,
}

// data
const list = [
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
        <ul style={navListStyles}>
          {list.map(({ to, text }, i) => {
            if (to) {
              return <li style={navListItemStyles} key={i}><Link to={to}>{text}</Link></li>
            }

            return <li style={navListItemStyles} key={i}><s>{text}</s></li>
          })}
        </ul>
      </nav>
    </header >
  )
}

export default Header
