import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import UploadProductComp from '../components/UploadProduct/UploadProduct'
import { getColorList, getBrandList, getStatusList, getCategoryList } from '../services/productService'
import * as cookie from 'cookie'


function Uploadproduct({ colorList, categoryList, brandList, statusList }) {
    return (
        <Layout>
            <Head>
                <title>Ürün Ekle</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <UploadProductComp
                colorList={colorList}
                categoryList={categoryList}
                brandList={brandList}
                statusList={statusList}
            />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const cookies = context.req.headers.cookie
    const { userId, token } = cookie.parse(cookies)
    const colorList = await getColorList()
    const categoryList = await getCategoryList()
    const brandList = await getBrandList()
    const statusList = await getStatusList()

    return {
        props: {
            colorList: colorList.data,
            categoryList: categoryList.data,
            brandList: brandList.data,
            statusList: statusList.data
        }
    }
}

export default Uploadproduct