import classNames from 'classnames'
const Container = ({className, children}) => {
    return (
        <div className={classNames("lg:max-w-5xl xl:max-w-screen-2xl mx-auto overflow-hidden", className)}>
            {children}   
        </div>
    )
}

export default Container
