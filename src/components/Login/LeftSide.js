import React from 'react'
import Image from 'next/image'
import loginPic from '../../assets/images/loginPic.png'
import styles from './LeftSide.module.scss'

function LeftSide() {
    return (

        <div className={styles.loginpic} >
            <Image objectFit='contain' alt='' src={loginPic} />
        </div>


    )
}

export default LeftSide