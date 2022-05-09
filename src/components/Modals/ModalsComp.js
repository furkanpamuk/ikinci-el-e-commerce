import React, { useState } from 'react'
import BuyModal from './BuyModal'
import styles from './Modal.module.scss'
import OffersModal from './OffersModal'


function ModalsComp() {

    const [showModal, setShowModal] = useState(true)
    const [modaltype, setModaltype] = useState(2)

    return (
        <>
            {
                showModal &&
                <div className={styles.modalContainer}>
                    <div className={styles.modalWrap}>
                        <div onClick={() => setShowModal(false)} className={styles.modalBg}></div>
                        <div className={styles.modalBody}>
                            {
                                modaltype === 1 ? <BuyModal /> : <OffersModal />
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalsComp