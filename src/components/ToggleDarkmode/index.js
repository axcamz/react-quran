import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../context"

const ToggleDarkmode = () => {
    const [settings, setSettings] = useContext(GlobalContext)
    const { darkMode } = settings

    useEffect(() => {
        const root = document.querySelector("#root")
        if(darkMode){
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

    })

    return (
        <div
            onClick={() => setSettings({...settings, darkMode: !darkMode})} 
            className={`h-6 w-6 rounded-full transition duration-300 ${!settings.darkMode ? "bg-gray-800" : "bg-white"}`}></div>
    )
}

export default ToggleDarkmode
