import React from 'react'
import Layout from '../../components/Layout/Layout'
import DetailComp from '../../components/Detail/Detail'
import { getProductById } from '../../services/productService'
import Head from 'next/head'

function Detail({ product }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Ürün Detayları</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <DetailComp selectProduct={product} />
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {

    const path = context.params.detail;
    const id = path.split('-').slice(-1)[0]
    const product = await getProductById(id)

    return {
        props: {
            product: product.data
        }
    }
}


export default Detail