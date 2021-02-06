import classNames from 'classnames'

const FadePopup = ({children, className, open}) => {
    return (
        <div className={classNames("bg-white dark:bg-gray-700 shadow-lg w-72 p-3 absolute opacity-0 transition-all right-5 -top-3 z-10 rounded transform", open ? "opacity-100 visible translate-y-20":"invisible", className)}>
            {children}
        </div>
    )
}

export default FadePopup
