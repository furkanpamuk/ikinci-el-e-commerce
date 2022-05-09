import React from 'react'
import Image from 'next/image'
import styles from './Account.module.scss'

function OfferProduct({ product, offerPrice }) {
    console.log('is here', offerPrice)
    return (
        <div className={styles.product}>
            <div className={styles.productInf} >
                <Image width={78} height={84} alt='' src={`${process.env.baseURL}/${product.image.formats.thumbnail.url}`} />
                <div>
                    <h5>{product.name}</h5>
                    <p>Verilen Teklif: <span> {offerPrice} </span></p>
                </div>
            </div>
            <div className={styles.buttons} >
                <button className={styles.acceptBtn} >Satın Al</button>
                <div>Onaylandı</div>
            </div>
        </div>
    )
}

export default OfferProduct