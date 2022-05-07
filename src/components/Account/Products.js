import React from 'react'
import Product from './Product'
import styles from './Account.module.scss'

function Products({ products }) {

    return (
        <div className={styles.products}>
            {
                products.map((product) =>
                    (<Product key={product.id} product={product} />)
                )
            }
        </div>
    )
}

export default Products