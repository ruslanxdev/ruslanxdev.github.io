import * as React from 'react'
import { styled } from 'styled-components'

// markup
const Container = styled.div`
  font-weight: normal;
  color: darkgray;
`

const headerStyles = {
  1: {
    fontSize: '1.375rem',
    marginTop: '-1rem'
  },
  2: {
    fontSize: '1.125rem',
    marginTop: '-1rem'
  },
  3: {
    display: 'inline-block',
    fontSize: '1.125rem',
  }
}

const SubHeader = ({ headerType = 1, children }) => {
  return (
    <Container className={'SubHeader'} style={headerStyles[headerType]}>
      {children}
    </Container>
  )
}

export default SubHeader
