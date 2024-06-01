import * as React from 'react'
import { styled } from 'styled-components'

// markup
const Container = styled.span`
    font-weight: normal;
    color: darkgray;
    font-size: 1.375rem;
`

const SubHeader = ({ children }) => {
    return (
      <Container className={'SubHeader'}>
        {children}
      </Container>
    )
  }

export default SubHeader
