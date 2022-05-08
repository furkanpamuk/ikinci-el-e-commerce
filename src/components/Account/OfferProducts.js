import React from 'react'
import OfferProduct from './OfferProduct'
import styles from './Account.module.scss'

function OfferProducts({ userOffers }) {
    console.log('it is', userOffers);
    return (

        <div className={styles.products}>
            {
                userOffers.map(product => (
                    <OfferProduct key={product.product.id} offerPrice={product.offerPrice} product={product.product} />
                ))
            }

        </div>
    )
}

export default OfferProducts