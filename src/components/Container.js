import * as React from 'react'

// styles
const containerStyles = {
  maxWidth: '52rem',
  margin: '0 auto',
  padding: '1rem',
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
