import React from 'react'
import styles from '../Login/Login.module.scss'


function InputField({
    label,
    inputType = 'text',
    placeholder,
    errorStatus,
    value,
    handleChange,
    name
}) {
    return (
        <div className={styles.formControl} >
            <p className={styles.formLabel} >{label}</p>
            <input
                className={`${errorStatus ? styles.errInp : ''}`}
                type={inputType}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={handleChange}
            />
        </div>
    )
}

export default InputField