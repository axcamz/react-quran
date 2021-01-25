import classNames from 'classnames'

const ListSurah = ({children, className}) => {
    return (
        <div className={classNames("w-full rounded-tl-3xl min-h-screen bg-theme-100 p-7", className)}>
          {children}  
        </div>
    )
}

export default ListSurah
