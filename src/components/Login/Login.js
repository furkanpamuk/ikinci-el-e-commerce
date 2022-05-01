import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import styles from './Login.module.scss'


function Login() {
    return (
        <div className={styles.loginPage} >
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Login