import React from 'react'
import Logo from '../../constant/containers/logo/Logo'
import styles from '../Login/Login.module.scss'
import InputField from '../Fields/InputField'
import FormActionBtn from '../Fields/FormActionBtn'


function RightSide() {
    return (
        <div className={styles.rightSide}  >
            <div className={styles.loginWrap}>
                <div className={styles.loginLogo}>
                    <Logo />
                </div>
                <div className={styles.loginArea}>
                    <div className={styles.loginHeader}>
                        <h1>Üye Ol</h1>
                        <p>Fırsatlardan yararlanmak için üye ol!</p>
                    </div>
                    <div className={styles.loginForm}>
                        <form >
                            <InputField
                                label={'Email'}
                                inputType={'email'}
                                placeholder={'Lütfen emailiniz girin'}
                            />
                            <InputField
                                label={'Şifre'}
                                inputType={'password'}
                                placeholder={'Lütfen şifreinizi girin'}
                            />
                            <div>
                                <FormActionBtn label={'Üye Ol'} />
                            </div>
                        </form>
                    </div>
                    <div className={styles.loginFooter}>
                        <p>Hesabın var mı?  <span>Giriş Yap</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide