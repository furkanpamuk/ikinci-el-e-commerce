import React, { useState } from 'react'
import PopUp from '../components/shared/PopUp/PopUp'

function Den() {

    const [showPopup, setShowPopup] = useState(false)

    const handleClick = () => {
        setShowPopup(true)
    }

    return (
        <>
            <button onClick={() => handleClick()} >Click me</button>
            {
                showPopup && <PopUp setShowPopup={setShowPopup} />
            }
        </>
    )
}

export default Den