import classNames from 'classnames'

const ListSurah = ({children, className}) => {
    return (
        <div className={classNames("w-full rounded-tl-3xl min-h-screen dark:bg-gray-800 transition-all duration-300 bg-theme-100 py-7 lg:px-7 px-3", className)}>
          {children}  
        </div>
    )
}

export default ListSurah
