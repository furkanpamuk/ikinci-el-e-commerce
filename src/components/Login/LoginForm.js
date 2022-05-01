import React, { useEffect } from 'react'
import InputField from '../Fields/InputField'
import FormActionBtn from '../Fields/FormActionBtn'
import styles from './Login.module.scss'


function LoginForm({ values, touched, errors, handleChange, handleSubmit }) {

    useEffect(() => {
        console.log(touched.identifier);
    }, [touched])

    return (
        <form onSubmit={handleSubmit} >
            <InputField
                label={'Email'}
                inputType={'email'}
                placeholder={'Lütfen emailiniz girin'}
                value={values.identifier}
                handleChange={handleChange}
                errorStatus={(errors.identifier) ? true : false}
                name={'identifier'}

            />
            <InputField
                label={'Şifre'}
                inputType={'password'}
                placeholder={'Lütfen şifreinizi girin'}
                value={values.password}
                handleChange={handleChange}
                errorStatus={(errors.password) ? true : false}
                name={'password'}
            />
            <div className={styles.forgotPw} >
                <span>Şifremi unuttum</span>
            </div>
            <div>
                <FormActionBtn label={'Giriş Yap'} />
            </div>
        </form>
    )
}

export default LoginForm