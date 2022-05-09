import React from 'react'
import Header from '../Header/Header'
import Head from 'next/head'


function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout