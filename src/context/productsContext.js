import React, { useContext, createContext, useState } from "react";

const ProductsContext = createContext();

const ProductProvider = ({ children }) => {

    const [category, setCategory] = useState(0)

    const data = {

    }
    return (
        <ProductsContext.Provider value={data}>
            {children}
        </ProductsContext.Provider>
    )
}

function useData() {
    return useContext(ProductsContext);
}

export { ProductProvider, ProductsContext, useData }