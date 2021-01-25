const { Quran, Wishlist, History } = require("../Icons")

const Navbar = () => {
    return (
        <div className="p-2 md:h-24 lg:static absolute bottom-0 h-16 w-full lg:max-w-min lg:h-screen">
            <div className="h-full w-full lg:p-3 bg-theme-300 lg:justify-start justify-between lg:px-3 px-14 rounded-md flex lg:flex-col flex-row items-center">
                <div className="logo lg:mb-11">
                    <Quran className="text-theme-600 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/>
                </div>
                <Wishlist className="text-theme-600 h-9 w-9 md:h-11 md:w-11 lg:mb-3"/>
                <History className="text-theme-600 h-9 w-9 md:h-11 md:w-11"/>
            </div>
        </div>
    )
}

export default Navbar
