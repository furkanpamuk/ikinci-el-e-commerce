import React from 'react'
import FormActionBtn from '../Fields/FormActionBtn'
import InputField from '../Fields/InputField'

function RegisterForm({ values, touched, errors, handleChange, handleSubmit }) {

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

export default RegisterForm