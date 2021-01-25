import Searchbar from "../Searchbar"
import classNames from 'classnames'

const Header = ({className}) => {
    return (
        <div className={classNames("flex items-center justify-between w-full mt-2 px-5 h-16", className)}>
            <h1 className="text-3xl font-bold font-poppins">Quran</h1>
            <Searchbar/>
        </div>
    )
}

export default Header
