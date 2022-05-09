import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import AccountComp from '../components/Account/Account'
import { getUserProducts, getUserOffers } from '../services/accountService'
import * as cookie from 'cookie'
import Head from 'next/head'
import { useUserData } from '../context/userContext'
import Router from 'next/router'

function Account({ userProducts, userOffers }) {

    const { isLogin } = useUserData();

    useEffect(() => {
        if (!isLogin) {
            Router.push('/login')
        }
    }, [isLogin])

    return (
        <Layout>
            <Head>
                <title>Hesabım</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <AccountComp userOffers={userOffers} userProducts={userProducts} />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const cookies = context.req.headers.cookie
    const { userId, token } = cookie.parse(cookies)
    const userProducts = await getUserProducts(userId)
    const userOffers = await getUserOffers(userId, token)
    return {
        props: {
            userProducts: userProducts.data,
            userOffers: userOffers.data
        }
    }
}


export default Account