import * as React from 'react'

import Container from './Container'
import LinkList from './LinkList'

// styles
const footerStyles = {
  paddingBottom: '1em',
}

// data
const links = [
  { href: 'https://github.com/ruslanxdev', text: 'GitHub' },
  { href: 'https://www.linkedin.com/in/ruslanxdev', text: 'LinkedIn' },
  { href: 'https://t.me/superadventurer', text: 'Telegram' },
  { href: 'mailto:ruslankhh@gmail.com', text: 'Email' },
]

// markup
const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Container>
        <LinkList items={links} />
        <div>© 2024 Руслан Хуснетдинов</div>
      </Container>
    </footer >
  )
}

export default Footer
