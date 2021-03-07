import classNames from 'classnames'
import { DropDownIcon } from '../../Icons'

const DropDown = ({open, onClick, title, className}) => {
    return (
        <div onClick={onClick} className={classNames("md:text-lg text-sm py-1 px-2 md:py-2 md:px-3 dark:text-gray-50 bg-white dark:bg-gray-700 shadow-lg w-max rounded-md font-medium font-poppins flex items-center cursor-pointer hover:shadow-xl transition-all z-20", className)}>
            <span>{title}</span>
            <div>
                <DropDownIcon className={classNames("h-6 w-6 text-gray-900 ml-1 md:ml-3 transform transition-transform dark:text-blue-100", open ? "rotate-180":"")}/>
            </div>
        </div>
    )
}

export default DropDown
