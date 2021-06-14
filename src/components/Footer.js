import * as React from 'react'

import LinkList from './LinkList'

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

// data
const links = [
  { href: 'https://github.com/ruslanxdev', text: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ruslanxdev', text: 'LinkedIn' },
  { href: 'https://t.me/ruslanxdev', text: 'Telegram' },
  { href: 'mailto:ruslanx.dev+site@gmail.com', text: 'Email' },
]

// markup
const Footer = () => {
  return (
    <footer style={footerStyles}>
      <LinkList items={links} />
      <div>© 2021 Ruslan Khusnetdinov</div>
    </footer >
  )
}

export default Footer
