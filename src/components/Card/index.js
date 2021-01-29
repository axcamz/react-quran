import classNames from 'classnames'
import StrokeWishlist from '../Icons/StrokeWishlist'

const Card = ({name, lafadz, arti, index, onClick, ...res}) => {
    return (
        <div className={classNames("bg-white duration-300 dark:bg-gray-700 dark:text-gray-50 text-gray-900 h-28 md:h-36 p-3 rounded-md hover:shadow-lg transition-all font-poppins flex flex-col justify-between")}>
            <div className="flex justify-between">
                <div className="flex justify-center items-center dark:bg-gray-600 bg-theme-200 text-sm lg:text-lg lg:w-8 lg:h-8 h-6 w-6 rounded p-1 font-semibold dark:text-white transition-all duration-300 text-theme-600">{index}</div>
                <div className="cursor-pointer">
                    <StrokeWishlist className="h-7 w-7 dark:text-gray-50 text-theme-500"/>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <a onClick={onClick} className="text-xl hover:underline cursor-pointer block lg:text-2xl font-semibold">{name}</a>
                    <span className="text-sm cursor-default lg:text-lg dark:text-gray-50 text-gray-700 font-light">{arti}</span>
                </div>
                <div>
                    <a onClick={onClick} className="text-3xl cursor-pointer lg:text-4xl font-serif">{lafadz}</a>
                </div>
            </div>
        </div>
    )
}

export default Card
