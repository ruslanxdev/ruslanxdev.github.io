import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Container from './Container.js'
import LinkList from './LinkList.js'

// styles
const headerStyles = {
  height: '7rem',
  paddingTop: '1rem',
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
  width: 10rem;
  height: 10rem;
  margin-top: 9rem;
  margin-left: -12.5rem;
  z-index: 1;
  border-radius: 50%;
  overflow: hidden;
  background-color: black;

  @media (max-width: 768px) {
    display: inline-block;
    float: left;
    position: relative;
    width: 6rem;
    height: 6rem;
    margin-top: 2rem;
    margin-left: 0;
  }
`

const ImagePageWrapper = styled(ImageHomeWrapper)`
  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin-top: -0.5rem;
    margin-right: 1rem;
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
  { to: '/blog', text: 'Блог' },
  { text: 'Доклады' },
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
              loading="eager"
              layout="fixed"
              width={320}
              height={320}
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
