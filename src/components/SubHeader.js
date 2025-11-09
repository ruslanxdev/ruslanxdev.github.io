import * as React from 'react'
import { styled } from 'styled-components'

// markup
const Container = styled.div`
  font-weight: normal;
`

const headerStyles = {
  1: {
    fontSize: '1.375rem',
    marginTop: '-1rem',
    color: 'darkgray',
  },
  2: {
    fontSize: '1.125rem',
    marginTop: '-1rem',
    marginBottom: '1.5rem',
    color: 'darkgray',
  },
  3: {
    display: 'inline-block',
    fontSize: '1.125rem',
    color: 'darkgray',
  },
  4: {
    display: 'inline-block',
  },
  5: {
    display: 'inline-block',
    fontSize: '0.777778em',
    color: 'darkgray',
  }
}

const SubHeader = ({ type = 1, children }) => {
  return (
    <Container className={'SubHeader'} style={headerStyles[type]}>
      {children}
    </Container>
  )
}

export default SubHeader
