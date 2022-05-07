import React from 'react'
import OfferProduct from './OfferProduct'
import styles from './Account.module.scss'

function OfferProducts({ userOffers }) {
    return (
        <div className={styles.products}>
            {
                userOffers.map(product => (
                    <OfferProduct key={product.product.id} product={product.product} />
                ))
            }

        </div>
    )
}

export default OfferProducts