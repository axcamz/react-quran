import { Heading, Searchbar } from "../../atoms"
import classNames from 'classnames'

const { SettingsCard } = require("../../molecules")

const Header = ({className, surah, surahName}) => {

    if(surah){
        return (
            <div className={classNames("flex relative items-center justify-between w-full py-4 px-5 h-16", className)}>
                <Heading title={surahName}/>
                <SettingsCard/>
            </div>
        )
    } else {
        return (
            <div className={classNames("flex relative dark:text-gray-50 items-center justify-between w-full mt-2 px-5 h-16", className)}>
                <h1 className="md:text-3xl text-2xl font-bold font-poppins">Quran</h1>
                <Searchbar/>
            </div>
        )
    }

}

export default Header