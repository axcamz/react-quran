import classNames from 'classnames'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../context'
import { BookMark } from '../../Icons'

const Card = ({name, lafadz, arti, index, onClick, ...res}) => {
    const {bookmarkList} = useContext(GlobalContext);
    const [bookmarked, setBookmarked] = bookmarkList;

    const isBookmarked = bookmarked.includes(index);
    
    const [clicked, setClicked] = useState(isBookmarked);
    const [notif, setNotif] = useState(false)

    const handleBookmarked = () => {
        function deleteIndex() {
            (bookmarked.splice(bookmarked.indexOf(index), 1))
            setBookmarked([...bookmarked])
        }
        if(clicked){
            deleteIndex()
            setClicked(false)
        } else {
            setBookmarked([...bookmarked, index])
            setClicked(true)
            setNotif(true)
            setTimeout(() => {
                setNotif(false)
            }, 2000);
        }
    }


    return (
        <div className={classNames("bg-white duration-300 overflow-hidden relative dark:bg-gray-700 dark:text-gray-50 text-gray-900 h-28 md:h-36 p-3 rounded-md hover:shadow-lg transition-all font-poppins flex flex-col justify-between")}>
            <div className="flex justify-between">
                <div className="flex justify-center items-center dark:bg-gray-600 bg-theme-200 text-sm lg:text-lg lg:w-8 lg:h-8 h-6 w-6 rounded p-1 font-semibold dark:text-white transition-all duration-300 text-theme-600">{index}</div>
                <div className="cursor-pointer">
                    <BookMark className="h-7 text-theme-600" fill={clicked ? "currentColor":"none"} onClick={() => handleBookmarked()}/>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <button onClick={onClick} className="text-xl outline-none hover:underline cursor-pointer block lg:text-2xl font-semibold">{name}</button>
                    <span className="text-sm cursor-default lg:text-lg dark:text-gray-50 text-gray-700 font-light">{arti}</span>
                </div>
                <div>
                    <button onClick={onClick} className="text-3xl outline-none cursor-pointer hover:text-theme-500 transition-all lg:text-4xl font-serif">{lafadz}</button>
                </div>
            </div>
            <span className={`absolute block px-2 text-theme-800 bg-theme-300 dark:bg-theme-600 dark:text-theme-100 right-12 rounded transition-transform transform ${notif ? "" : "-translate-y-10"}`}>Ditandai</span>
        </div>
    )
}

export default Card
