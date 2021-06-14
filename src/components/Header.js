import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Container from './Container'
import LinkList from './LinkList'

// styles
const headerStyles = {
  height: '7em',
  paddingTop: '1em',
}

const navStyles = {
  position: 'relative',
  marginTop: '1em',
}

const hiddenNavStyles = {
  ...navStyles,
  opacity: 0,
  touchAction: 'none',
  pointerEvents: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
}

const ImageWrapper = styled.div`
  display: block;
  position: absolute;
  width: 6em;
  height: 6em;
  margin-top: 9.5em;
  margin-left: -7em;
  z-index: 1;

  @media (max-width: 768px) {
    display: inline-block;
    float: left;
    position: relative;
    margin-top: -1.5em;
    margin-left: -1em;
  }
`

const imageStyles = {
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
}

// data
const links = [
  { text: 'Talks' },
  { text: 'Blog' },
]

// markup
const Header = ({ isHome = false }) => {
  return (
    <header style={headerStyles}>
      <Container>
        <ImageWrapper>
          <Link to={'/'}>
            <StaticImage style={imageStyles}
              alt="Illustration of the head of Ruslan Khusnetdinov"
              src="../images/icon.png"
              placeholder="none"
              layout="fixed"
              width={100}
              height={100}
            />
          </Link>
        </ImageWrapper>
        <nav style={isHome ? hiddenNavStyles : navStyles}>
          <LinkList items={links} />
        </nav>
      </Container>
    </header >
  )
}

export default Header
