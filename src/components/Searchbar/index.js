import { Search } from "../Icons"

const Searchbar = () => {
    return (
        <div className="relative">
            <input type="text" maxLength={30} placeholder="Cari Surah" className="lg:py-2 py-1 pl-2 pr-6 lg:pl-5 lg:pr-12 focus:ring-4 ring-theme-100 lg:w-auto w-56 transition-all duration-300 dark:ring-gray-600 dark:border-white dark:bg-gray-300 text-gray-900 outline-none border-2 font-poppins text-lg border-theme-500 rounded-full"/>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-800 w-6 h-6"/>
            </div>
        </div>
    )
}

export default Searchbar
