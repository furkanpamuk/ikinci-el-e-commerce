import React from 'react'
import Img from 'next/image'
import styles from './Products.module.scss'
import { useProductsData } from '../../context/productsContext'
import Router from 'next/router'
import { stringHelper } from '../../utils/helpers/seoHelper'


function ProductItemWrapper({ children, product }) {

    const { setSelectProduct } = useProductsData()

    const handleClick = (product) => {
        setSelectProduct(product)
        Router.push('detail/[product]', `detail/${stringHelper(product.name)}-${product.id}`)
    }
    return (
        <div onClick={() => handleClick(product)} className={styles.productBox}>
            {children}
        </div>
    )
}

function ProductItem({ product }) {
    return (
        <ProductItemWrapper product={product}>
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