import { useContext, useState } from "react"
import { GlobalContext } from "../../../context"
import { CheckBox } from "../../atoms"

const Settings = (props) => {
    // Filtering Ayah
    const [settings, setSettings] = useContext(GlobalContext)


    props.settings(settings)

    return (
        <div className="font-poppins dark:text-blue-100">
            <CheckBox
                id="terjemah"
                label="Translation"
                checked={settings.terjemah}
                onClick={() => setSettings({...settings, terjemah: !settings.terjemah})}
            />
            <CheckBox
                id="latin"
                label="Transliteration"
                checked={settings.latin}
                onClick={() => setSettings({...settings, latin: !settings.latin})}
            />
        </div>
    )
}

export default Settings
