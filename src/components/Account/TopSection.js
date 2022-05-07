import React, { useEffect } from 'react'
import accountPng from '../../assets/images/account.png'
import Image from 'next/image'
import styles from './Account.module.scss'
import { useUserData } from '../../context/userContext'

function TopSection() {

    const { user } = useUserData()
    console.log(user);

    useEffect(() => {

    }, [user])

    return (
        <div className={styles.topSection}>
            <Image width={38} height={38} alt={''} src={accountPng} />
            <p>{user.email}</p>
        </div>
    )
}

export default TopSection