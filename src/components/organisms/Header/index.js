import { Heading } from "../../atoms"
import classNames from 'classnames'
import { useEffect, useState } from "react"
import { ArrowLeft } from "../../Icons"
import { useHistory } from "react-router-dom"

const { SettingsCard } = require("../../molecules")

const Header = ({className, surah, surahName, onClick}) => {
    const history = useHistory()
    
    if(surah){
        return (
            <div className={classNames("surahHeader z-50 duration-300 transition-all flex fixed left-0 items-center justify-between w-full py-4 px-3 h-16", className)}>
                <div className="flex items-center">
                    <div onClick={() => history.goBack()} className="mr-2 dark:text-white p-2 rounded-full bg-white shadow-lg dark:bg-gray-700 hover:shadow-lg cursor-pointer">
                        <ArrowLeft className="h-5 w-5 md:h-6 md:w-6"/>
                    </div>
                    <div onClick={onClick}>
                        <Heading title={surahName} className="cursor-default"/>
                    </div>
                </div>
                <SettingsCard/>
            </div>
        )
    } else {
        return (
            <div className={classNames("flex relative dark:text-gray-50 text-gray-800 items-center justify-between w-full mt-2 px-5 h-16", className)}>
                <h1 className="md:text-3xl text-2xl font-bold font-poppins">Quran</h1>
                {/* <Searchbar/> */}
            </div>
        )
    }

}

export default Header