import React from 'react'
import LeftSide from '../Login/LeftSide'
import RightSide from './RightSide'
import styles from '../Login/Login.module.scss'

function Register() {
    return (
        <div className={styles.loginPage} >
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Register