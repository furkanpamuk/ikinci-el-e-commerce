import React from 'react'
import Image from 'next/image'
import styles from './Account.module.scss'
import { useModalData } from '../../context/modalContext'

function OfferProduct({ product, offerPrice }) {

    const { setShowModal, setSelectProduct, setModaltype } = useModalData()

    const handleOnclick = (type) => {
        setShowModal(true)
        setModaltype(type)
        setSelectProduct(product)
    }

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
                <button className={styles.acceptBtn} onClick={() => handleOnclick(1)} >Satın Al</button>
                <div>Onaylandı</div>
            </div>
        </div>
    )
}

export default OfferProduct