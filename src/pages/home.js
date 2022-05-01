import React from 'react'
import { API } from '../services';
import Img from 'next/image'

import Layout from '../components/Layout/Layout';
import Banner from '../components/homepage/Banner/Banner';
import Categories from '../components/homepage/Categories/Categories';
import Products from '../components/Products/Products';

function Home({ products, categories }) {

  return (
    <Layout>
      <Banner />
      <Categories categories={categories} />
      <Products products={products.filter(item => item.image !== null && item.image.formats.small?.url)} />
    </Layout>
  )
}
export async function getStaticProps() {
  const categories = await API.get('categories')
  const products = await API.get('/products')

  return {
    props: {
      products,
      categories
    }
  }
}
export default Home