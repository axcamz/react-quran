const { useEffect } = require("react");

export default function toggleDarkMode(value){
    useEffect(() => {
        const root = document.querySelector("#root")
        if(value){
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
    })
}