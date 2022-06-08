import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
font-size: 18px;
border-radius: 8px;
color: #FFF;
font-weight: bold;
width: 235px;
height: 45px;
margin-right: 10px;
cursor: pointer;
`

const DetailBtn = ({ label, bgColor, labelColor, onClick }) => {

    return (
        <Button
            type='submit'
            style={{
                backgroundColor: bgColor,
                color: labelColor
            }}
            onClick={onClick}
        > {label}</Button >
    )
}

export default DetailBtn