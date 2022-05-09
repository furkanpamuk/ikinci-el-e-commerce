import React, { useEffect } from 'react'
import LoginComp from '../components/Login/Login'
import Head from 'next/head'

function Login() {

    return (
        <>
            <Head>
                <title>Giriş Yap</title>
            </Head>
            <LoginComp />
        </>
    )
}

export default Login