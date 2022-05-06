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
                        <table>
                            <tbody>
                                <tr>
                                    <td>Marka:</td>
                                    <td>{selectProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td>Renk:</td>
                                    <td>{selectProduct.color}</td>
                                </tr>
                                <tr>
                                    <td>Durumu:</td>
                                    <td>{selectProduct.status}</td>
                                </tr>
                            </tbody>
                        </table>
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