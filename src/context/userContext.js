import { getCookie } from "cookies-next";
import React, { useContext, createContext, useState, useEffect } from "react";

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

    useEffect(() => {
        const userCookie = getCookie('user')
        if (userCookie) {
            setUser(JSON.parse(userCookie))
        }
    }, [])

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