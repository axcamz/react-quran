import classNames from 'classnames'

const DropDown = ({open, onClick, title}) => {
    return (
        <div onClick={onClick} className="md:text-lg text-sm py-2 px-3 dark:text-gray-50 bg-white dark:bg-gray-700 shadow-lg w-max rounded-md font-medium font-poppins flex items-center cursor-pointer hover:shadow-xl transition-all z-20">
            <span>{title}</span>
            <div>
                <DropDown className={classNames("h-6 w-6 text-gray-900 ml-3 transform transition-transform dark:text-blue-100", open ? "rotate-180":"")}/>
            </div>
        </div>
    )
}

export default DropDown
