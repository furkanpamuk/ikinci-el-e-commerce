import React from 'react'
import FormActionBtn from '../Fields/FormActionBtn'
import InputField from '../Fields/InputField'

function RegisterForm({ values, errors, handleChange, handleSubmit }) {

    return (
        <form onSubmit={handleSubmit} >
            <InputField
                label={'Email'}
                inputType={'email'}
                placeholder={'Lütfen emailiniz girin'}
                value={values.email}
                handleChange={handleChange}
                errorStatus={(errors.email) ? true : false}
                name={'email'}
            />
            <span> {errors.email} </span>
            <InputField
                label={'Şifre'}
                inputType={'password'}
                placeholder={'Lütfen şifrenizi girin'}
                value={values.password}
                handleChange={handleChange}
                errorStatus={(errors.password) ? true : false}
                name={'password'}
            />
            <span> {errors.password} </span>
            <div>
                <FormActionBtn label={'Üye Ol'} />
            </div>
        </form>
    )
}

export default RegisterForm