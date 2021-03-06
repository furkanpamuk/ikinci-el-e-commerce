import React, { useContext, createContext, useState } from "react"

const ModalContext = createContext()

const ModalProvider = ({ children }) => {

    const [showModal, setShowModal] = useState(false)
    const [modaltype, setModaltype] = useState(2)
    const [selectProduct, setSelectProduct] = useState({})

    const data = {
        showModal,
        setShowModal,

        modaltype,
        setModaltype,

        selectProduct,
        setSelectProduct
    }
    return (
        <ModalContext.Provider value={data}>
            {children}
        </ModalContext.Provider>
    )
}

function useModalData() {
    return useContext(ModalContext);
}

export { ModalProvider, ModalContext, useModalData }