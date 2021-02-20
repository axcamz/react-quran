import classNames from 'classnames'

const Bismillah = ({className, content}) => {
    return (
        <div className={classNames("text-center font-serif text-3xl lg:text-4xl dark:text-blue-50", className)}>
            <span>{content}</span>
        </div>
    )
}

export default Bismillah
