import { Search } from "../Icons"

const Searchbar = () => {
    return (
        <div className="relative">
            <input type="text" className="py-2 pl-5 pr-12 focus:ring-4 ring-theme-100 transition-all text-gray-900 outline-none border-2 font-poppins text-lg border-theme-500 rounded-full"/>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search className="text-gray-800 w-9 h-9"/>
            </div>
        </div>
    )
}

export default Searchbar
