import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { API } from '../services'
import Layout from '../components/Layout/Layout'
import Banner from '../components/homepage/Banner/Banner'
import Categories from '../components/homepage/Categories/Categories'
import Products from '../components/homepage/Products/Products'
import { useUserData } from '../context/userContext'

function Home({ products, categories }) {

  const { isLogin, setIsLogin } = useUserData();
  const [selectCategoryID, setSelectCategoryID] = useState()
  const [selectProducts, setSelectProducts] = useState(products)

  useEffect(() => {
    if (selectCategoryID) {
      const selectedCategory = categories.filter(item => item.id === selectCategoryID)
      setSelectProducts(selectedCategory[0].products)
    }
    else {
      setSelectProducts(products)
    }

  }, [selectCategoryID])

  return (
    <Layout>
      <Head>
        <title>Ana Sayfa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <Categories setSelectCategoryID={setSelectCategoryID} categories={categories} />
      <Products products=
        {
          selectProducts.filter(item => item.image !== null && item.image.formats?.small?.url)} />
    </Layout>
  )
}
export async function getStaticProps() {
  const categories = await API.get('categories')
  const products = await API.get('/products')

  return {
    props: {
      products: products.data,
      categories: categories.data,
    }
  }
}
export default Home