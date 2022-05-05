import React from 'react'
import Image from 'next/image'
import styles from './Detail.module.scss'
import Container from '../../constant/containers/Container'
import DetailBtn from './DetailBtn'


function Detail({ selectProduct }) {
    return (
        <Container>
            <div className={styles.detail}>
                <Image width={700} height={737} alt={''} src={`${process.env.baseURL}${selectProduct.image.formats.small.url}`} />
                <div className={styles.productDetail} >
                    <h1> {selectProduct.name} </h1>
                    <div className={styles.moreInf} >
                        <p><span>Marka:</span> {selectProduct.brand} </p>
                        <p><span>Renk:</span> {selectProduct.color} </p>
                        <p><span>Marka:</span> {selectProduct.status} </p>
                    </div>
                    <h3>{selectProduct.price} {process.env.currency}</h3>
                    <div>
                        <DetailBtn label={'Satın Al'} bgColor={'#4B9CE2'} labelColor={'#fff'} />
                        <DetailBtn label={'Teklif Ver'} bgColor={'#F0F8FF'} labelColor={'#4B9CE2'} />
                    </div>
                    <div className={styles.description}>
                        <h4>Açıklama</h4>
                        <p>{selectProduct.description}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Detail