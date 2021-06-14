import * as React from 'react'

// styles
const containerStyles = {
  maxWidth: '52em',
  margin: '0 auto',
  padding: '1em',
}

// markup
const Container = ({ children }) => {
  return (
    <div style={containerStyles}>
      {children}
    </div >
  )
}

export default Container
