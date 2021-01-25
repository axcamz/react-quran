import classNames from 'classnames'
import StrokeWishlist from '../Icons/StrokeWishlist'

const Card = ({name, lafadz, arti, index, ...res}) => {
    return (
        <div className={classNames("bg-white text-gray-900 h-36 p-3 rounded-md hover:shadow-lg transition-all font-poppins flex flex-col justify-between")}>
            <div className="flex justify-between">
                <div className="flex justify-center items-center bg-theme-200 text-xl w-7 rounded h-7 p-1 font-semibold text-theme-600">{index}</div>
                <div>
                    <StrokeWishlist className="h-7 w-7"/>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <span className="text-lg text-gray-700 font-light">{arti}</span>
                </div>
                <div>
                    <span className="text-4xl font-serif">{lafadz}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
