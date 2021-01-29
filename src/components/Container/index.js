import classNames from 'classnames'

const Container = ({children, className}) => {
    return (
        <div className={classNames("lg:container lg:mx-auto")}>
            {children}
        </div>
    )
}

export default Container
