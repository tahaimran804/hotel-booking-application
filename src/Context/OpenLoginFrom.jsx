import { createContext, useState } from "react";


export const OpenLoginFromContext = createContext();

const LoginFromProvider = ({ children }) => {
    const [openFrom, setOpenFrom] = useState(false)

    return (
        <OpenLoginFromContext.Provider value={{ openFrom, setOpenFrom }}>
            {children}
        </OpenLoginFromContext.Provider>
    )
}

export default LoginFromProvider