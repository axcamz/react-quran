import { useContext, useState } from "react";
import { GlobalContext } from "../../../context";
import useTheme from "../../../hooks/useTheme";
import { CheckBox, Switch } from "../../atoms";

const Settings = () => {
    // Filtering Ayah
    const [settings, setSettings] = useContext(GlobalContext);
    const { terjemah, latin, darkMode } = settings;

    useTheme(darkMode)

    return (
        <div className="font-poppins dark:text-blue-100">
            <CheckBox
                id="terjemah"
                label="Translation"
                checked={terjemah}
                onClick={() => setSettings({...settings, terjemah: !terjemah})}
            />
            <CheckBox
                id="latin"
                label="Transliteration"
                checked={latin}
                onClick={() => setSettings({...settings, latin: !settings.latin})}
            />
            <Switch
                onClick={() => setSettings({...settings, darkMode: !darkMode})}
                checked={darkMode}
            />
        </div>
    )
}

export default Settings
