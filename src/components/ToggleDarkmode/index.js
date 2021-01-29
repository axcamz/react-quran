import { useEffect, useState } from "react"

const ToggleDarkmode = () => {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const root = document.querySelector("#root")
        if(dark){
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }

    })

    return (
        <div
            onClick={() => setDark(!dark)} 
            className={`h-6 w-6 rounded-full transition duration-300 ${!dark ? "bg-gray-800" : "bg-white"}`}></div>
    )
}

export default ToggleDarkmode
