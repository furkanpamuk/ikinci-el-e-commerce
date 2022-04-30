import React from 'react'
import Container from '../../constant/containers/Container'
import ProductItem from './ProductItem'
import styles from './Products.module.scss'

function Products({ products }) {
    return (

        <Container>
            <div className={styles.products}>
                {
                    products.map((product, index) =>
                        <ProductItem key={index} product={product} />
                    )
                }
            </div>
        </Container>
    )
}

export default Products