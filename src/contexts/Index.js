import React from 'react'
import ThemeContextProvider from './ThemeContext'

const Provider = ({children}) => {
  return (
    <ThemeContextProvider> {children}</ThemeContextProvider>
  )
}

export default Provider