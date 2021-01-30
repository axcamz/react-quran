import { useState } from "react"
import { CheckBox } from "../../atoms"

const Filter = () => {
    const [settings, setSettings] = useState({
        arti: false,
        latin: false
    })
    return (
        <div className="font-poppins dark:text-blue-100">
            <CheckBox
                id="terjemah"
                onClick={() => }
            />
            <CheckBox/>
        </div>
    )
}

export default Filter
