import classNames from 'classnames'
import StrokeWishlist from '../Icons/StrokeWishlist'

const Card = ({name, lafadz, arti, index, ...res}) => {
    return (
        <div className={classNames("bg-white duration-300 dark:bg-gray-700 dark:text-gray-50 text-gray-900 h-28 md:h-36 p-3 rounded-md hover:shadow-lg transition-all font-poppins flex flex-col justify-between")}>
            <div className="flex justify-between">
                <div className="flex justify-center items-center dark:bg-gray-600 bg-theme-200 text-sm lg:text-lg lg:w-8 lg:h-8 h-6 w-6 rounded p-1 font-semibold dark:text-white transition-all duration-300 text-theme-600">{index}</div>
                <div>
                    <StrokeWishlist className="h-7 w-7 dark:text-gray-50 text-theme-500"/>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl lg:text-2xl font-semibold">{name}</h1>
                    <span className="text-sm lg:text-lg dark:text-gray-50 text-gray-700 font-light">{arti}</span>
                </div>
                <div>
                    <span className="text-3xl lg:text-4xl font-serif">{lafadz}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
