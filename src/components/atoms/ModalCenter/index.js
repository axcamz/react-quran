const ModalCenter = ({visible, children}) => {
    return (
        <div className={`dark:bg-gray-700 bg-white text-gray-900 dark:text-gray-100 w-10/12 min-h-0  z-10 shadow-lg fixed transform left-1/2 top-1/2 -translate-x-1/2 transition-all -translate-y-1/2 rounded-lg font-poppins overflow-auto ${visible ? "max-h-10/8 p-5 pt-10" : "max-h-0 p-0 pt-0"}
        `}>
            {children}
        </div>
    )
}

export default ModalCenter
