const { Quran, Wishlist, History } = require("../../Icons")
const { default: ToggleDarkmode } = require("../../ToggleDarkmode")

const Sidebar = () => {
    return (
        <div className="p-2 md:h-24 fixed z-20 bottom-0 h-16 w-full lg:left-0 lg:max-w-min lg:h-screen">
            <div className="h-full w-full lg:p-3 lg:border-none border border-white bg-theme-300 dark:bg-gray-700 transition-all duration-300 lg:justify-start justify-between lg:px-3 px-14 rounded-md flex lg:flex-col flex-row items-center">
                <div className="logo lg:mb-11">
                    <Quran className="text-theme-600 dark:text-gray-500 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/>
                </div>
                {/* <Wishlist className="text-theme-600 dark:text-gray-500 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/>
                <History className="text-theme-600 dark:text-gray-500 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/> */}
                <ToggleDarkmode/>
            </div>
        </div>
    )
}

export default Sidebar
