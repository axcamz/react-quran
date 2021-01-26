import classNames from 'classnames'

const Skeleton = ({className}) => {
    return (
        <div className={classNames("rounded", className)}></div>
    )
}

export default Skeleton
