import React from 'react'
import styles from './Modal.module.scss'
import { useModalData } from '../../context/modalContext'

function BuyModal() {

    const { setShowModal, selectProduct } = useModalData()

    return (
        <div className={styles.buyModal}>
            <h2>Satın Al</h2>
            <p>Satın Almak istiyor musunuz?</p>
            <div className={styles.buttonsArea}>
                <button onClick={() => setShowModal(false)} >Vazgeç</button>
                <button>Satın Al</button>
            </div>
        </div>
    )
}

export default BuyModal