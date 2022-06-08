import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'
import silinecekPng from '../../assets/images/silinecek.png'
import { useModalData } from '../../context/modalContext'
import { useUserData } from '../../context/userContext'


function OffersModal() {

    const defaultOffer = {
        product: 0,
        users_permissions_user: 0,
        offerPrice: 0,
        isStatus: true
    }
    const { user } = useUserData()
    const { setShowModal, selectProduct } = useModalData()
    const [offer, setOffer] = useState(defaultOffer)

    const handleOfferPrice = (discountRate) => {
        const newPrice = selectProduct.price - selectProduct.price * discountRate

        setOffer({ ...offer, offerPrice: newPrice })
    }

    const handleOffer = () => {


        console.log(offer);
    }

    useEffect(() => {
        setOffer({ ...offer, product: selectProduct.id, users_permissions_user: user.id, offerPrice: selectProduct.price })
    }, [])


    return (
        <div className={styles.offersModal}>
            <div className={styles.header}>
                <h2>Teklif Ver</h2>
                <span onClick={() => setShowModal(false)}  >X</span>
            </div>
            <div className={styles.productDetail}>
                <div className={styles.leftSide}>
                    <Image height={50} width={50} src={`${process.env.baseURL}${selectProduct.image.formats.small.url}`} alt='' />
                    <p>{selectProduct.name}</p>
                </div>
                <div className={styles.rightSide}>
                    <p>{selectProduct.price} {process.env.currency}</p>
                </div>
            </div>
            <div className={styles.offersBox}>
                <form >
                    <div className={styles.offerBox}>
                        <input
                            onClick={() => handleOfferPrice(0.2)}
                            name='radioBtn'
                            type="radio"
                        />
                        <label htmlFor="">%20’si Kadar Teklif Ver</label>
                    </div>
                    <div className={styles.offerBox}>
                        <input
                            onClick={() => handleOfferPrice(0.3)}
                            name='radioBtn'
                            type="radio"
                        />
                        <label htmlFor="">%30’si Kadar Teklif Ver</label>
                    </div>
                    <div className={styles.offerBox}>
                        <input
                            onClick={() => handleOfferPrice(0.4)}
                            name='radioBtn'
                            type="radio"
                        />
                        <label htmlFor="">%40’si Kadar Teklif Ver</label>
                    </div>
                </form>
            </div>
            <input
                onChange={e => setOffer({ ...offer, offerPrice: Number(e.target.value) })
                }
                type="number"
                placeholder='teklif giriniz'
            />
            <button onClick={handleOffer} >Onayla</button>
        </div >
    )
}

export default OffersModal