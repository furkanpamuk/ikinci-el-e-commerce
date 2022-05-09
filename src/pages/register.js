import React from 'react'
import RegisterComp from '../components/Register/Register'
import Head from 'next/head'

function Register() {
    return (
        <>
            <Head>
                <title>Üye Ol</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <RegisterComp />
        </>
    )
}

export default Register