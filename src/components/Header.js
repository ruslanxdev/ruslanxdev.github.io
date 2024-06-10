import * as React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Container from './Container.js'
import LinkList from './LinkList.js'

// styles
const headerStyles = {
  height: '7rem',
  paddingTop: '0.5rem',
}

const navStyles = {
  position: 'relative',
}

const hiddenNavStyles = {
  ...navStyles,
  display: 'none',
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
  margin-top: 9.5rem;
  margin-left: -12.5rem;
  z-index: 1;
  border-radius: 50%;
  overflow: hidden;

  @media (max-width: 1200px) {
    display: inline-block;
    float: left;
    width: 6rem;
    height: 6rem;
    margin-top: 2.5rem;
    margin-left: 0;
  }
`

const ImagePageWrapper = styled(ImageHomeWrapper)`
  width: 4rem;
  height: 4rem;
  margin-top: 9.5rem;
  margin-left: -5rem;

  @media (max-width: 1000px) {
    position: relative;
    width: 4rem;
    height: 4rem;
    margin-top: -0.5rem;
    margin-right: 1rem;
    margin-left: 0;
  }
`

const imageStyles = {
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  transition: 'none'
}

const SiteTitle = styled.div`
  line-height: 1.5;
  vertical-align: top;
  margin-right: 1rem;

  @media (max-width: 576px) {
    display: block;
    width: calc(100% - 5rem);
    margin-right: 0;
  }
`

const linkStyles = {
  color: 'black',
  textDecoration: 'none',
}

// data
const links = [
  { to: '/blog', text: 'Блог' },
  { to: '/cv', text: 'Резюме' },
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
              src="../images/icon-small.png"
              placeholder="none"
              loading="eager"
              layout="fixed"
              width={320}
              height={320}
            />
          </Link>
        </ImageWrapper>
        <div style={isHome ? hiddenNavStyles : navStyles}>
          <SiteTitle><Link to={'/'} style={linkStyles}>Руслан Хуснетдинов</Link></SiteTitle>
          <nav>
            <LinkList items={links} />
          </nav>
        </div>
      </Container>
    </header >
  )
}

export default Header
