import React, { useContext, createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    const data = {
        user,
        setUser,
        isLogin,
        setIsLogin
    }
    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

function useUserData() {
    return useContext(userContext);
}

export { UserProvider, userContext, useUserData }