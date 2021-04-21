import { useContext } from "react"
import { GlobalContext } from "../../../context"
import useTheme from "../../../hooks/useTheme";
import animationData from "../../../assets/lottie/light-dark-mode-button.json"
import Lottie from "react-lottie";

const ToggleDarkmode = () => {
    const {settingValue} = useContext(GlobalContext);
    const [settings, setSettings] = settingValue
    const { darkMode } = settings;

    const defaultOptions = {
        loop: false,
        autoPlay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    useTheme(darkMode)

    // return (
    //     <div
    //         onClick={() => setSettings({...settings, darkMode: !darkMode})} 
    //         className={`h-6 w-6 rounded-full transition duration-300 ${!settings.darkMode ? "bg-gray-800" : "bg-white"}`}>
    //     </div>
    // )
    return (
        <div className="" onClick={() => setSettings({...settings, darkMode: !darkMode})} >
            <Lottie
                direction = {darkMode ? -1 : 1}
                options={defaultOptions}
                width={100}
                height={100}
            />
        </div>
    )
}

export default ToggleDarkmode
