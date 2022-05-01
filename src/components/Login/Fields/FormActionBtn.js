import React from 'react'
import { jsx } from '@emotion/react'

const FormActionBtn = ({ label, onClick = null }) => {



    return (
        <button
            jsx={jsx`
        padding: 10px 0;
        background-color: #4B9CE2;
        font-size: 18px;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        width: 300px;
      }
    `}
        >{label}</button>
    )
}

export default FormActionBtn