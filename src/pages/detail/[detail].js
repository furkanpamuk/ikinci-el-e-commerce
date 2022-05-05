import React from 'react'
import Layout from '../../components/Layout/Layout'
import DetailComp from '../../components/Detail/Detail'
import { getProductById } from '../../services/productService'

function Detail({ product }) {
    return (
        <>
            <Layout />
            <DetailComp selectProduct={product} />
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