import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Detail.module.scss'
import Container from '../../constant/containers/Container'
import DetailBtn from './DetailBtn'
import { useModalData } from '../../context/modalContext'
import { useUserData } from '../../context/userContext'
import { deleteOffer } from '../../services/productService'
import { errorMessage, successMessage } from '../../utils/helpers/toastHelper'


function Detail({ selectProduct }) {

    const defaultExistUserOfferValue = {
        hasUserOffer: false,
        userOfferPrice: 0,
        offerID: 0,
    }

    const { setShowModal, setModaltype, setSelectProduct } = useModalData()
    const { user } = useUserData()

    const [existUserOffer, setExistUserOffer] = useState(defaultExistUserOfferValue)

    const handleDeleteOffer = async () => {
        const id = existUserOffer.offerID
        const { statusType } = await deleteOffer(id)
        if (statusType) {
            successMessage('Teklif Geri Çekildi')
            window.location.reload(true)
        }
        else {
            errorMessage('Teklif Geri Çekilemedi')
        }
    }

    const handleOnclick = (type) => {
        setShowModal(true)
        setModaltype(type)
        setSelectProduct(selectProduct)
    }

    const fillExistUserOffer = () => {
        const userOfferArr = selectProduct.offers.filter(value => {
            return value?.users_permissions_user === user.id
        })
        if (userOfferArr.length > 0) {
            setExistUserOffer({
                hasUserOffer: true, userOfferPrice: userOfferArr[userOfferArr.length - 1].offerPrice, offerID: userOfferArr[userOfferArr.length - 1].id
            })

        }
    }

    useEffect(() => {
        fillExistUserOffer()
    }, [user])

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

                    {existUserOffer.hasUserOffer && <h3>Verilen Teklif: {existUserOffer.userOfferPrice}</h3>}

                    <div>
                        <DetailBtn
                            onClick={() => handleOnclick(1)}
                            label={'Satın Al'}
                            bgColor={'#4B9CE2'}
                            labelColor={'#fff'}
                        />
                        {existUserOffer.hasUserOffer ?
                            <DetailBtn
                                onClick={() => handleDeleteOffer()}
                                label={'Teklifi Geri Çek'}
                                bgColor={'#F0F8FF'}
                                labelColor={'#4B9CE2'}
                            /> :
                            <DetailBtn
                                onClick={() => handleOnclick(2)}
                                label={'Teklif Ver'}
                                bgColor={'#F0F8FF'}
                                labelColor={'#4B9CE2'}
                            />
                        }
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