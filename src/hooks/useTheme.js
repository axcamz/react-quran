import { useEffect } from "react"

export default function useTheme(value){
    useEffect(() => {
        const root = document.querySelector("#root")
        if(value){
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    })
}