import React from 'react'
import RegisterComp from '../components/Register/Register'
import Head from 'next/head'

function Register() {
    return (
        <>
            <Head>
                <title>Üye Ol</title>
            </Head>
            <RegisterComp />
        </>
    )
}

export default Register