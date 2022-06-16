import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import Image from 'next/image'
import { useModalData } from '../../context/modalContext'
import { useUserData } from '../../context/userContext'
import { offerProduct } from '../../services/productService'
import { errorMessage, successMessage } from '../../utils/helpers/toastHelper'

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

    const handleOfferPrice = (offerRate) => {
        const newPrice = selectProduct.price * offerRate

        setOffer({ ...offer, offerPrice: newPrice })
    }

    const handleOffer = async () => {
        if (offer.product > 0 && offer.users_permissions_user > 0 && offer.offerPrice > 0) {
            const { statusType } = await offerProduct(offer)
            if (statusType) {
                setShowModal(false)
                successMessage('Teklif Gönderildi')
                window.location.reload(true)
            }
            else {
                errorMessage('Teklif Gönderilemedi')
            }
        }
        else {
            errorMessage('Lütfen Teklif Veriniz')
        }
    }

    useEffect(() => {
        setOffer({ ...offer, product: selectProduct.id, users_permissions_user: user.id })
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
                className={styles.offerInp}
                onChange={e => setOffer({ ...offer, offerPrice: Number(e.target.value) })
                }
                type="number"
                placeholder='Teklif Belirle'
            />
            <div className={styles.btnBox}>
                <button onClick={handleOffer} >Onayla</button>
            </div>
        </div >
    )
}

export default OffersModal