import { useHistory } from "react-router-dom"
import { ListSurah } from "../../components/atoms"
import { Card, Sidebar } from "../../components/molecules"
import Header from "../../components/organisms/Header"
import SurahCardSkeleton from "../../components/Skeleton/SurahCardSkeleton"

const AllSurah = (props) => {
    const history = useHistory()
    const {loading, data} = props
    const getSurah = id => {
        history.push(`/surah/${id}`)
    }

    return (
        <div className="flex w-full flex-col lg:ml-24 2xl:ml-0">
            <Header className="mb-3"/>
            <ListSurah>
                <div  className="grid grid-cols-1 lg:mb-0 mb-10 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 md:gap-4 gap-2">
                    {
                        !loading && data.map(surah => {
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
                        })
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

export default AllSurah
