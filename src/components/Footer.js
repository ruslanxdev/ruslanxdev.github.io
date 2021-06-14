import * as React from 'react'
import { Link } from 'gatsby'

// styles
const footerStyles = {
  maxWidth: '52em',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: '2em',
  paddingBottom: '2em',
  paddingRight: '2em',
  paddingLeft: '2em',
}

const navListStyles = {
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
  { to: 'https://github.com/ruslanxdev', text: 'GitHub' },
  { to: 'https://www.linkedin.com/in/ruslanxdev', text: 'LinkedIn' },
  { to: 'https://t.me/ruslanxdev', text: 'Telegram' },
  { to: 'mailto://ruslanx.dev+site@gmail.com', text: 'Email' },
]

// markup
const Footer = () => {
  return (
    <footer style={footerStyles}>
      <ul style={navListStyles}>
        {list.map(({ to, text }, i) => {
          if (to) {
            return <li style={navListItemStyles} key={i}><Link to={to}>{text}</Link></li>
          }

          return <li style={navListItemStyles} key={i}><s>{text}</s></li>
        })}
      </ul>
      <div>© 2021 Ruslan Khusnetdinov</div>
    </footer >
  )
}

export default Footer
