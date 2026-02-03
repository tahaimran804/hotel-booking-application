import { createContext, useState } from "react";

export const ToggleContext = createContext()

const ToggleProvider = ({ children }) => {
    const [openMenuAsideBar, setOpenMenuAsideBar] = useState(false)
    return (
        <ToggleContext.Provider value={{ openMenuAsideBar, setOpenMenuAsideBar }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider;