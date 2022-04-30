import React from 'react'
import Layout from '../components/Layout/Layout';
import { API } from '../services';
import Banner from '../components/homepage/Banner/Banner';
import Categories from '../components/homepage/Categories/Categories';
import Img from 'next/image'

function Home({ products, categories }) {

  const controlImg = (product) => {

  }

  return (
    <Layout>
      <Banner />
      <Categories categories={categories} />
      <div>


        <h1>APİ DENEMELERİ</h1>

        <h1>Products</h1>
        {
          products.filter(item => item.image !== null && item.image.formats.small?.url).map((product) =>
            (<Img width={200} height={300} key={product.id} src={`${process.env.baseURL}${product.image.formats.small.url}`} />))
        }



      </div>

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