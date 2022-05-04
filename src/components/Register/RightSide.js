import React from 'react'
import Logo from '../../constant/containers/logo/Logo'
import styles from '../Login/Login.module.scss'
import { useState } from 'react'
import RegisterForm from './RegisterForm'
import { Formik } from 'formik'
import * as yup from 'yup'


function RightSide() {

    const defaultValues = {
        username: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const handleFormSubmit = (values, resetForm) => {
        setFormValues(values)
        setTimeout(() => {
            resetForm();
        }, 1000);
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
                                username: yup
                                    .string()
                                    .email("E-Mail formatı uygun değildir!")
                                    .required('E-Mail alanı zorunludur!'),
                                password: yup
                                    .string()
                                    .min(8, 'Şifre en az 6 karakter olmalıdır!')
                                    .max(20, 'Şifre en fazla 20 karakter olmalıdır!')
                                    .required('Şifre alanı zorunludur!')
                            })}
                            onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}
                        >
                            {
                                ({
                                    values,
                                    touched,
                                    errors,
                                    handleChange,
                                    handleSubmit
                                }) =>
                                    <RegisterForm
                                        values={values}
                                        touched={touched}
                                        errors={errors}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                            }
                        </Formik>
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