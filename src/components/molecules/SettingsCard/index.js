import { useContext, useState } from "react";
import { GlobalContext } from "../../../context";
import useTheme from "../../../hooks/useTheme";
import { CheckBox, DropDown, FadePopup, Switch } from "../../atoms";

const SettingsCard = () => {
    // Filtering Ayah
    const {settingValue} = useContext(GlobalContext);
    const [settings, setSettings] = settingValue;
    const { terjemah, latin, darkMode } = settings;

    const [open, setOpen] = useState(false)

    useTheme(darkMode)

    return (
        <>
            <DropDown
                open={open}
                onClick={() => setOpen(!open)}
                title="Pengaturan"
            />
            <FadePopup open={open}>
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
            </FadePopup>
        </>
    )
}

export default SettingsCard
