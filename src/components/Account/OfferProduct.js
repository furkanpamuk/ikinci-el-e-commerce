import React from 'react'
import Image from 'next/image'
import styles from './Account.module.scss'

function OfferProduct({ product }) {
    return (
        <div className={styles.offerProduct}>
            <div className={styles.productInf} >
                <Image width={78} height={84} alt='' src={`${process.env.baseURL}/${product.image.formats.thumbnail.url}`} />
                <div>
                    <h5>{product.name}</h5>
                    <p>Verilen Teklif: <span> XX TL </span></p>
                </div>
            </div>
            <div className={styles.buttons} >
                <button className={styles.acceptBtn} >Satın Al</button>
                <button className={styles.rejectBtn} >Onaylandı</button>
            </div>
        </div>
    )
}

export default OfferProduct