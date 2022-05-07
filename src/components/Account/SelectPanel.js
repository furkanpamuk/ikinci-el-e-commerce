import React from 'react'
import styles from './Account.module.scss'

function SelectPanel({ isActive, setIsActive }) {


    return (
        <div className={styles.selectProductsList}>
            <div onClick={() => setIsActive(1)} >
                <p>Teklif Aldıklarım</p>
                {isActive === 1 && <span></span>}
            </div>
            <div onClick={() => setIsActive(2)}>
                <p>Teklif Verdiklerim</p>
                {isActive === 2 && <span></span>}
            </div>
        </div>
    )
}

export default SelectPanel