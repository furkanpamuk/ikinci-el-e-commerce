import React, { useState } from 'react'
import Logo from '../../constant/containers/logo/Logo'
import styles from './Login.module.scss'
import { Formik } from 'formik'
import LoginForm from './LoginForm'
import * as yup from 'yup'



function RightSide() {

    const defaultValues = {
        identifier: '',
        password: ''
    }

    const [formValues, setFormValues] = useState(defaultValues)

    const handleFormSubmit = (values, resetForm) => {
        setFormValues(values)
        console.log(values);
    }

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
                        <Formik
                            initialValues={formValues}
                            validationSchema={yup.object().shape({
                                identifier: yup.string().required(),
                                password: yup.string().required()
                            })}
                            onSubmit={(values, { resetForm }) => handleFormSubmit(values, resetForm)}
                        >
                            {
                                ({
                                    values,
                                    errors,
                                    handleChange,
                                    handleSubmit }) =>
                                    <LoginForm
                                        values={values}
                                        errors={errors}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                    />
                            }
                        </Formik>
                    </div>
                    <div className={styles.loginFooter}>
                        <p>Hesabın yok mu? <span>Üye Ol</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSide