import { useContext } from "react"
import { GlobalContext } from "../../../context"
import useTheme from "../../../hooks/useTheme";

const ToggleDarkmode = () => {
    const {settingValue} = useContext(GlobalContext);
    const [settings, setSettings] = settingValue
    const { darkMode } = settings;

    useTheme(darkMode)

    return (
        <div
            onClick={() => setSettings({...settings, darkMode: !darkMode})} 
            className={`h-6 w-6 cursor-pointer rounded-full transition duration-300 ${!settings.darkMode ? "bg-gray-800" : "bg-white"}`}>
        </div>
    )
}

export default ToggleDarkmode