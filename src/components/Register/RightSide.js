import React from 'react'
import Logo from '../../constant/containers/logo/Logo'
import styles from '../Login/Login.module.scss'
import { useState } from 'react'
import RegisterForm from './RegisterForm'
import { Formik } from 'formik'
import * as yup from 'yup'
import Link from 'next/link'
import { authRegister } from '../../services/authService'
import { useUserData } from '../../context/userContext'
import Router from 'next/router'

function RightSide() {

    const defaultValues = {
        email: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(defaultValues)
    const { setUser, setIsLogin } = useUserData();

    const handleFormSubmit = async (values) => {
        const username = values.email.split('@')[0]
        const newValues = { ...values, username }
        setFormValues(newValues)
        const result = await authRegister(newValues)
        if (result.statusType) {
            setUser(result.data?.user)
            setIsLogin(true)
            Router.push('/')
        }
    }

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
                        <Formik
                            initialValues={formValues}
                            validationSchema={yup.object().shape({
                                email: yup
                                    .string()
                                    .email("E-Mail formatı uygun değildir!")
                                    .required('E-Mail alanı zorunludur!'),
                                password: yup
                                    .string()
                                    .min(8, 'Şifre en az 6 karakter olmalıdır!')
                                    .max(20, 'Şifre en fazla 20 karakter olmalıdır!')
                                    .required('Şifre alanı zorunludur!')
                            })}
                            onSubmit={(values) => handleFormSubmit(values)}
                        >
                            {
                                ({
                                    values,
                                    errors,
                                    handleChange,
                                    handleSubmit
                                }) =>
                                    <RegisterForm
                                        values={values}
                                        errors={errors}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                            }
                        </Formik>
                    </div>
                    <div className={styles.loginFooter}>
                        <p>Hesabın var mı?  <Link href={'login'}><span>Giriş Yap</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide