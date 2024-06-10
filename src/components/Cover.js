import * as React from 'react'
import { styled } from 'styled-components'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// styles
const Container = styled.span`
  display: inline-block;
  position: relative;
  float: right;
  width: 10rem;
  margin-top: 3rem;
  margin-left: 1rem;
  overflow: hidden;

  @media (max-width: 576px) {
    max-height: 10rem;
    float: none;
    margin-top: 0;
    margin-left: 0;
    margin-bottom: -2rem;
  }
`

const Cover = ({ data }) => {
  return (
    <Container>
      <GatsbyImage
        alt="Руслан Хуснетдинов"
        image={getImage(data)}
        placeholder="blurred"
        loading="eager"
        layout="fixed"
      />
    </Container>
  )
}

export default Cover