import React, { useState } from 'react'
import styles from './Modal.module.scss'
function ModalsContainer() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {
                showModal &&
                <div className={styles.modalContainer}>
                    <div className={styles.modalWrap}>
                        <div onClick={() => setShowModal(false)} className={styles.modalBg}></div>
                        <div className={styles.modalBody}>
                            hello
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ModalsContainer