import classNames from 'classnames'

const ItalicLatin = ({transliteration, isLatin}) => {
    return (
        <div className={classNames("font-poppins max-w-2xl lg:order-2 order-1 overflow-hidden duration-300 transition-all", isLatin ? "max-h-96 mt-3":"max-h-0 mt-0")}>
            <span className="font-light italic">
                {transliteration}
            </span>
        </div>
    )
}

export default ItalicLatin
