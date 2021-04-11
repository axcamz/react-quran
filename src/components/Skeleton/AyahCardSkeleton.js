import Skeleton from "./Skeleton"
import classNames from 'classnames'

const AyahCardSkeleton = () => {
    return (
        <div className="px-3 pt-5">
            <div className={classNames("bg-gray-100 dark:bg-gray-700 text-gray-900 h-36 p-3 rounded-md hover:shadow-lg transition-all font-poppins flex flex-col justify-between relative overflow-hidden")}>
                <div className="flex justify-end items-center ">
                    <Skeleton className="h-14 max-w-3xl w-full bg-gray-400 dark:bg-gray-400"/>
                </div>
                <div className="flex justify-between items-center pt-5">
                    <Skeleton className="h-10 w-52 max-w-xl lg:w-full bg-gray-400 dark:bg-gray-400"/>
                    <Skeleton className="h-12 w-52 max-w-xl lg:w-full bg-gray-300 dark:bg-gray-400"/>
                </div>
                <div className="shimmer"></div>
            </div>
        </div>
    )
}

export default AyahCardSkeleton
