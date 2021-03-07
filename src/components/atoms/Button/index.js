import classNames from 'classnames'

const Button = ({children, className}) => {
    return (
        <button className={classNames("md:px-3 md:py-2 py-1 px-2 bg-theme-300 shadow-lg rounded-md dark:bg-gray-700 dark:text-white md:text-lg text-sm", className)}>
            {children}
        </button>
    )
}

export default Button
