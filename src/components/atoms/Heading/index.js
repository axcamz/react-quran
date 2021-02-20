import classNames from 'classnames'

const Heading = ({title, className}) => {
    return (
        <h1 className={classNames("md:text-2xl text-lg md:py-2 py-1 px-3 dark:text-gray-50 bg-white dark:bg-gray-700 shadow-lg w-max rounded-md font-bold font-poppins", className)}>{title}</h1>
    )
}

export default Heading
