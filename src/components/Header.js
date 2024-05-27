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
}

const hiddenNavStyles = {
  ...navStyles,
  opacity: 0,
  touchAction: 'none',
  pointerEvents: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
}

const ImageHomeWrapper = styled.div`
  display: block;
  position: absolute;
  width: 6em;
  height: 6em;
  margin-top: 9em;
  margin-left: -7.5em;
  z-index: 1;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;

  @media (max-width: 768px) {
    display: inline-block;
    float: left;
    position: relative;
    margin-top: 2em;
    margin-left: 0;
  }
`

const ImagePageWrapper = styled(ImageHomeWrapper)`
  @media (max-width: 768px) {
    width: 4em;
    height: 4em;
    margin-top: -0.5em;
    margin-right: 1em;
  }
`

const imageStyles = {
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  transition: 'none'
}

// data
const links = [
  { to: '/cv', text: 'CV' },
  { text: 'Доклады' },
  { text: 'Блог' },
]

// markup
const Header = ({ isHome = false }) => {
  const ImageWrapper = isHome ? ImageHomeWrapper : ImagePageWrapper;

  return (
    <header style={headerStyles}>
      <Container>
        <ImageWrapper>
          <Link to={'/'}>
            <StaticImage style={imageStyles}
              alt="Руслан Хуснетдинов"
              src="../images/ruslankhh-2024.jpg"
              placeholder="none"
              layout="fixed"
              width={100}
              height={100}
            />
          </Link>
        </ImageWrapper>
        <div style={isHome ? hiddenNavStyles : navStyles}>
          <div>Руслан Хуснетдинов</div>
          <nav>
            <LinkList items={links} />
          </nav>
        </div>
      </Container>
    </header >
  )
}

export default Header
