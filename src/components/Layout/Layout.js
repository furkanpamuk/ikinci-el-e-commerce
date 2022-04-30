import React from 'react'
import Header from '../Header'
import Head from 'next/head'


function Layout({children}) {
  return (
    <>
    <Head>
        <title>ikinci El</title>
    </Head>
    <Header/>
    {children}
    </>
  )
}

export default Layout