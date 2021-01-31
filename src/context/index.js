import { createContext, useState } from "react"

export const GlobalContext = createContext()

export const ContextProvider = (props) => {
    const [settings, setSettings] = useState({
        darkMode: false,
        terjemah: true,
        latin: false,
    })
    return (
       <GlobalContext.Provider value={[settings, setSettings]}>
           {props.children}
       </GlobalContext.Provider>
    )
}

