import React, { useContext, createContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const [selectProduct, setSelectProduct] = useState([])

    const data = {
        selectProduct,
        setSelectProduct
    }
    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProductsData() {
    return useContext(ProductsContext);
}

export { ProductsProvider, ProductsContext, useProductsData }