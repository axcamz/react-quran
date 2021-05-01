import { createContext, useState } from "react"

export const GlobalContext = createContext()

export const ContextProvider = (props) => {

    const localS = JSON.parse(localStorage.getItem('settings'))
    const localBookmarked = JSON.parse(localStorage.getItem('bookmarked'))

    const settingsList = {
        darkMode: false,
        terjemah: true,
        latin: false,
        ...localS
    }

    const bookmarkedList = localBookmarked

    const [settings, setSettings] = useState(settingsList)
    const [bookmarked, setBookmarked] = useState(bookmarkedList)
    const uniqueSortedIndex = Array.from(new Set(bookmarked)).sort((a, b) =>  a - b);   

    localStorage.setItem('bookmarked', JSON.stringify(uniqueSortedIndex))
    localStorage.setItem('settings', JSON.stringify(settings))

    return (
       <GlobalContext.Provider value={{settingValue: [settings, setSettings], bookmarkList: [bookmarked, setBookmarked]}}>
           {props.children}
       </GlobalContext.Provider>
    )
}

