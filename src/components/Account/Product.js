import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Account.module.scss'


function Product({ product }) {

    const [status, setStatus] = useState(null)

    return (
        <div className={styles.product}>
            <div className={styles.productInf} >
                <Image width={78} height={84} alt='' src={`${process.env.baseURL}/${product.image.formats.thumbnail.url}`} />
                <div>
                    <h5>{product.name}</h5>
                    <p>Alınan Teklif: <span> XX TL </span></p>
                </div>
            </div>
            <div className={styles.buttons} >

                {
                    !status &&
                    <>
                        <button className={styles.acceptBtn} onClick={() => setStatus('accepted')}>Onayla</button>
                        <button className={styles.rejectBtn} onClick={() => setStatus('rejected')}>Reddet</button>
                    </>
                }
                {
                    status === 'accepted' && <div>Onaylandı</div>
                }
                {
                    status === 'rejected' && <div>Reddedildi</div>
                }




            </div>
        </div>
    )
}

export default Product