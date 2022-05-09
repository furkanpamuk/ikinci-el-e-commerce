import React from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'
import silinecekPng from '../../assets/images/silinecek.png'


function OffersModal() {
    return (
        <div className={styles.offersModal}>
            <div className={styles.header}>
                <h2>Teklif Ver</h2>
                <span>X</span>
            </div>
            <div className={styles.productDetail}>
                <div className={styles.leftSide}>
                    <Image height={50} width={50} src={silinecekPng} />
                    <p>Beli Uzun Trençkot Kareli</p>
                </div>
                <div className={styles.rightSide}>
                    <p>319.90 {process.env.currency}</p>
                </div>
            </div>
            <div className={styles.offersBox}>
                <div className={styles.offerBox}>
                    <input type="checkbox" />
                    <label htmlFor="">%20’si Kadar Teklif Ver</label>
                </div>
                <div className={styles.offerBox}>
                    <input type="checkbox" />
                    <label htmlFor="">%20’si Kadar Teklif Ver</label>
                </div>
                <div className={styles.offerBox}>
                    <input type="checkbox" />
                    <label htmlFor="">%20’si Kadar Teklif Ver</label>
                </div>
            </div>
        </div >
    )
}

export default OffersModal