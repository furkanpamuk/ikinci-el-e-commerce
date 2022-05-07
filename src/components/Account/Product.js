import React from 'react'
import Image from 'next/image'
import styles from './Account.module.scss'


function Product({ product }) {
    console.log(product);
    return (
        <div className={styles.product}>
            <div className={styles.productInf} >
                <Image width={78} height={84} alt='' src={`${process.env.baseURL}/${product.image.formats.thumbnail.url}`} />
                <div>
                    <h5>{product.name}</h5>
                    <p>Alınan Teklif: <span> XX TL </span></p>
                </div>
            </div>
            <div className={styles.buttons} >
                <button className={styles.acceptBtn} >Onayla</button>
                <button className={styles.rejectBtn} >Reddet</button>
            </div>
        </div>
    )
}

export default Product