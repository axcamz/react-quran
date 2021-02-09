import Searchbar from "../atoms/Searchbar"
import classNames from 'classnames'
import { DropDown } from "../Icons"
import { useEffect, useState } from "react"

const Header = ({className, surah, surahName, children}) => {

    if(surah){
        return (
            <div className={classNames("flex relative items-center justify-between w-full py-4 px-5 h-16", className)}>
                <h1 className="md:text-2xl text-xl py-2 px-3 dark:text-gray-50 bg-white dark:bg-gray-700 shadow-lg w-max rounded-md font-bold font-poppins">{surahName}</h1>
                {children}
            </div>
        )
    } else {
        return (
            <div className={classNames("flex relative dark:text-gray-50 items-center justify-between w-full mt-2 px-5 h-16", className)}>
                <h1 className="md:text-3xl text-2xl font-bold font-poppins">Quran</h1>
                {/* <Searchbar/> */}
            </div>
        )
    }

}

export default Header
