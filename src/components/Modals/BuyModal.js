import React from 'react'
import styles from './Modal.module.scss'
import { useModalData } from '../../context/modalContext'
import { buyProduct } from '../../services/productService'
import { errorMessage, successMessage } from '../../utils/helpers/toastHelper'

function BuyModal() {

    const { setShowModal, selectProduct } = useModalData()


    const handleBuyProduct = async () => {
        const data = { ...selectProduct, isOfferable: false, isSold: true }
        const { statusType } = await buyProduct(data)

        if (statusType) {
            successMessage('Ürün Satın Alındı')
            window.location.reload(true)
        }
        else {
            errorMessage('Ürün Satın Alınamadı')
        }
        setShowModal(false)

    }

    return (
        <div className={styles.buyModal}>
            <h2>Satın Al</h2>
            <p>Satın Almak istiyor musunuz?</p>
            <div className={styles.buttonsArea}>
                <button onClick={() => setShowModal(false)} >Vazgeç</button>
                <button onClick={handleBuyProduct} >Satın Al</button>
            </div>
        </div>
    )
}

export default BuyModal