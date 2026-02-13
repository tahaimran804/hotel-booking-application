import { createContext, useState } from "react";

export const ToggleContext = createContext()

const ToggleProvider = ({ children }) => {
    const [openMenuAsideBar, setOpenMenuAsideBar] = useState(false)
    const [openNotifacation, setOpenNotifacation] = useState(false)
    const [openAsideBar, setOpenAsideBar] = useState(false)
    return (
        <ToggleContext.Provider value={{ openMenuAsideBar, setOpenMenuAsideBar, openNotifacation, setOpenNotifacation, openAsideBar, setOpenAsideBar }}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleProvider;