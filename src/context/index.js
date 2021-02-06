import { createContext, useState } from "react"

export const GlobalContext = createContext()

export const ContextProvider = (props) => {

    const localS = JSON.parse(localStorage.getItem('settings'))

    const settingsList = {
        darkMode: false,
        terjemah: true,
        latin: false,
        ...localS
    }

    const [settings, setSettings] = useState(settingsList)

    localStorage.setItem('settings', JSON.stringify(settings))

    return (
       <GlobalContext.Provider value={[settings, setSettings]}>
           {props.children}
       </GlobalContext.Provider>
    )
}

