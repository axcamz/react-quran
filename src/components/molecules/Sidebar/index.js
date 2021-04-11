import { Link } from "react-router-dom"
import { ToggleDarkmode } from "../../atoms"

const { Quran, History, BookMark } = require("../../Icons")

const Sidebar = () => {
    return (
        <div className="p-2 md:h-24 fixed z-20 bottom-0 h-16 w-full lg:left-0 lg:max-w-min lg:h-screen">
            <div className="h-full w-full lg:p-3 lg:border-none border border-white bg-theme-300 dark:bg-gray-700 transition-all duration-300 lg:justify-start justify-between lg:px-3 px-14 rounded-md flex lg:flex-col flex-row items-center">
                <div className="logo lg:mb-11">
                    <Link to="/surah">
                        <Quran className="text-theme-600 dark:text-gray-500 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/>
                    </Link>
                </div>
                <Link to="/bookmarked">
                    <BookMark className="text-theme-600 dark:text-gray-500 h-9 w-9 md:h-11 md:w-11 lg:mb-3" fill="currentColor"/>
                </Link>
                {/* <History className="text-theme-600 dark:text-gray-500 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/> */}
                <ToggleDarkmode/>
            </div>
        </div>
    )
}

export default Sidebar
