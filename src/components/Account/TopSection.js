import React from 'react'
import accountPng from '../../assets/images/account.png'
import Image from 'next/image'
import styles from './Account.module.scss'

function TopSection({ user }) {
    return (
        <div className={styles.topSection}>
            <Image width={38} height={38} alt={''} src={accountPng} />
            <p>{user.email}</p>
        </div>
    )
}

export default TopSection