import React from 'react'
import Image from 'next/image'
import loginPic from '../../assets/images/loginPic.png'
import styles from './Login.module.scss'

function LeftSide() {

    return (
        <div className={styles.loginpic} >
            <Image width='100%' height='100%' layout='fill' alt='' src={loginPic} />
        </div>
    )
}

export default LeftSide