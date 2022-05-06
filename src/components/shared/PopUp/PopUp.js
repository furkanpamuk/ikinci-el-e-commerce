import React from 'react'
import styles from './PopUp.module.scss'

function PopUp({ setShowPopup }) {

    // onClick={(e) => e.stopPropagation(setShowPopup(false))}
    // const handleClick = (e) => {
    //     e.stopPropagation
    // }


    return (
        <div className={styles.popup} >
            <div onClick={(e) => e.stopPropagation()} className={styles.box} >
                <h1>Satın Al</h1>
                <p>Satın Almak istiyor musunuz?</p>
                <div>
                    <button>Vazgeç</button>
                    <button>Satın Al</button>
                </div>
            </div>
        </div>


    )
}

export default PopUp