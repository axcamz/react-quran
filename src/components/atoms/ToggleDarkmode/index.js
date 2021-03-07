import { useContext } from "react"
import { GlobalContext } from "../../../context"
import useTheme from "../../../hooks/useTheme";

const ToggleDarkmode = () => {
    const [settings, setSettings] = useContext(GlobalContext);
    const { darkMode } = settings;

    useTheme(darkMode)

    return (
        <div
            onClick={() => setSettings({...settings, darkMode: !darkMode})} 
            className={`h-6 w-6 rounded-full transition duration-300 ${!settings.darkMode ? "bg-gray-800" : "bg-white"}`}></div>
    )
}

export default ToggleDarkmode
