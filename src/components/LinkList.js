import * as React from 'react'
import { Link } from 'gatsby'

// styles
const linkListStyles = {
  listStyleType: 'none',
  paddingLeft: 0,
  marginTop: '0.5em',
}

const linkListItemStyles = {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginRight: 15,
}

// markup
const LinkList = ({ items }) => {
  return (
    <ul style={linkListStyles}>
      {items.map(({ to, href, text }, i) => {
        if (to) {
          return <li style={linkListItemStyles} key={i}><Link to={to}>{text}</Link></li>
        }

        if (href) {
          return (
            <li style={linkListItemStyles} key={i}>
              <a href={href} rel="noreferrer" target="_blank">{text}</a>
            </li>
          )
        }

        return <li style={linkListItemStyles} key={i}><s>{text}</s></li>
      })}
    </ul>
  )
}

export default LinkList
