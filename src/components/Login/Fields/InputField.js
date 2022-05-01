import React from 'react'
import styles from '../Login.module.scss'


function InputField({
    label,
    inputType = 'text',
    placeholder,
    errorStatus,
    value
}) {
    return (
        <div className={styles.formControl} >
            <p className={styles.formLabel} >{label}</p>
            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default InputField