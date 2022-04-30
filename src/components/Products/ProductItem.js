import React from 'react'
import Img from 'next/image'
import styles from './Products.module.scss'

function ProductItemWrapper({ children }) {
    return (
        <div className={styles.productBox}>
            {children}
        </div>
    )
}

function ProductItem({ product }) {
    return (
        <ProductItemWrapper>
            <Img width={260} height={297} key={product.id} src={`${process.env.baseURL}${product.image.formats.small.url}`} />

            <div className={styles.brandAndColor}>
                <p>{product.brand}</p>
                <div>
                    <span>Renk:&nbsp;</span>{product.color}
                </div>
            </div>

            <h5 className={styles.price} > {`${product.price} ${process.env.currency}`} </h5>
        </ProductItemWrapper>
    )
}

export default ProductItem