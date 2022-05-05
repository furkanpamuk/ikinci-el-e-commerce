import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
padding: 10px 0;
background-color: #4B9CE2;
font-size: 18px;
border-radius: 8px;
color: #FFF;
font-weight: bold;
width: 100%;
margin-top: 30px;
cursor: pointer;
`

const FormActionBtn = ({ label, onClick = null }) => {

    return (
        <Button type='submit'>{label}</Button>
    )
}

export default FormActionBtn