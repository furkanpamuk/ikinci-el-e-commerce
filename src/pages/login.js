import React, { useEffect } from 'react'
import LoginComp from '../components/Login/Login'
import Head from 'next/head'

function Login() {

    return (
        <>
            <Head>
                <title>Giriş Yap</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <LoginComp />
        </>
    )
}

export default Login