import classNames from "classnames"
import Skeleton from "./Skeleton"
import "./style.css"

const SurahCardSkeleton = () => {
    return (
        <div className={classNames("bg-gray-100 text-gray-900 h-36 p-3 rounded-md hover:shadow-lg transition-all font-poppins flex flex-col justify-between relative overflow-hidden")}>
            <div className="flex justify-between">
                <Skeleton className="w-6 h-6 bg-gray-300"/>
                <Skeleton className="w-7 h-7 bg-gray-400"/>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <Skeleton className="w-32 h-9 bg-gray-400"/>
                    <Skeleton className="w-14 h-5 bg-gray-300 mt-2"/>
                </div>
                <div>
                    <Skeleton className="h-14 w-32 bg-gray-400"/>
                </div>
            </div>
            <div className="shimmer"></div>
        </div>
    )
}

export default SurahCardSkeleton
