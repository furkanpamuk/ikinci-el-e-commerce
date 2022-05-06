import React from 'react'
import Layout from '../components/Layout/Layout';
import AccountComp from '../components/Account/Account'
import { getUserProducts, getUserOffers } from '../services/accountService'
import { getCookie } from 'cookies-next';
import * as cookie from 'cookie'

function Account() {

    return (
        <Layout>
            <AccountComp />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const cookies = context.req.headers.cookie
    const { userId, token } = cookie.parse(cookies)
    const userProducts = await getUserProducts(userId)
    const userOffers = await getUserOffers(userId, token)
    console.log(userOffers);
    return {
        props: {
            userProducts: userProducts.data,
            userOffers: userOffers.data
        }
    }
}


export default Account