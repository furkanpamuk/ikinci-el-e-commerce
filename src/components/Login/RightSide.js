import React from 'react'
import Logo from '../../constant/containers/logo/Logo'
import styles from './Login.module.scss'
import InputField from './Fields/InputField'
import FormActionBtn from './Fields/FormActionBtn'


function RightSide() {
    return (
        <div className={styles.rightSide}  >
            <div className={styles.loginWrap}>
                <div className={styles.loginLogo}>
                    <Logo />
                </div>
                <div className={styles.loginArea}>
                    <div className={styles.loginHeader}>
                        <h1>Giriş Yap</h1>
                        <p>Fırsatlardan yararlanmak için giriş yap!</p>
                    </div>
                    <div className={styles.loginForm}>
                        <form action="">
                            <InputField
                                label={'Email'}
                                inputType={'email'}
                                placeholder={'Lütfen emailiniz girin'}
                            />
                            <InputField
                                label={'Şifre'}
                                inputType={'passaword'}
                                placeholder={'Lütfen şifreinizi girin'}
                            />
                            <div className={styles.forgotPw} >
                                <span>Şifremi unuttum</span>
                            </div>
                            <div>
                                <FormActionBtn label={'neden yapmıyorsun'} />
                            </div>
                        </form>
                    </div>
                    <div className={styles.loginFooter}></div>
                </div>
            </div>
        </div>
    )
}

export default RightSide