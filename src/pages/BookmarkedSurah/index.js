import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { ListSurah } from "../../components/atoms"
import { BookMark } from "../../components/Icons"
import { Card } from "../../components/molecules"
import Header from "../../components/organisms/Header"
import SurahCardSkeleton from "../../components/Skeleton/SurahCardSkeleton"
import { GlobalContext } from "../../context"

const BookmarkedSurah = (props) => {
    const history = useHistory()
    const {loading, data} = props

    const {bookmarkList} = useContext(GlobalContext)
    const [bookmarked] = bookmarkList
    const [finalData, setFinalData] = useState([])
    const [isFinish, setIsFinish] = useState(false)
    
    const getSurah = id => {
        history.push(`/surah/${id}`)
    }

    useEffect(() => {
        const FilterData = () => {
            if(!loading){
                let dataBookmarked = [];
                for (let i = 0; i < bookmarked.length; i++) {
                    dataBookmarked.push(data[bookmarked[i] - 1])
                    // console.log(dataBookmarked);
                }
                setFinalData(dataBookmarked)
                setIsFinish(true)
            }
        }

        FilterData()
    }, [loading])


    const TidakAdaSurah = () => {
        return (
            <div className="col-span-3">
                    <h1 className=" dark:text-gray-50 text-theme-900 font-poppins md:text-2xl text-xl font-bold mb-5">Tidak Ada Surah yang di Bookmark</h1>
                    <span className=" dark:text-gray-50 text-lg text-gray-900 inline font-poppins w-full">Klik Icon <BookMark className="h-6 w-6 inline text-theme-600" fill="none"/> Untuk men Bookmark Surah</span>
            </div> 
        )
    }
    
    return (
        <div className="flex w-full flex-col lg:ml-24 2xl:ml-0">
            <Header className="mb-3"/>
            <ListSurah>
                <div  className="grid grid-cols-1 lg:mb-0 mb-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 md:gap-4 gap-2">
                    {
                        isFinish && (finalData.length > 0) ? finalData.map(surah => {
                            // console.log(finalData);
                            return (
                                <Card
                                    key={surah.number}
                                    index={surah.number}
                                    lafadz={surah.name.short}
                                    name={surah.name.transliteration.id}
                                    arti={surah.name.translation.id}
                                    onClick={() => getSurah(surah.number)}
                                />
                            )
                        }) : <TidakAdaSurah/>
                    }
                    {
                        loading && [1,2,3].map(key => {
                            return <SurahCardSkeleton key={key}/>
                        })
                    }

                </div>
            </ListSurah>
        </div>
    )
}

export default BookmarkedSurah
