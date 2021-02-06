import { useEffect } from "react"

export default function useTheme(value){
    useEffect(() => {
        const html = document.querySelector("html")
        if(value){
            html.classList.add("dark")
        } else {
            html.classList.remove("dark")
        }
    })
}