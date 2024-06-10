import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// styles
const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  line-height: 1.5;
  height: 1.5rem;
`

const linkListItemStyles = {
  display: 'inline-block',
  verticalAlign: 'top',
  marginRight: '1rem',
  height: '1.5rem',
}

// markup
const LinkList = ({ items }) => {
  return (
    <List>
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
    </List>
  )
}

export default LinkList
