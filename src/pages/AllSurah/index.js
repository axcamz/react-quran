import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import Card from "../../components/Card"
import {Header, ListSurah, Navbar} from "../../components/index"
import SurahCardSkeleton from "../../components/Skeleton/SurahCardSkeleton"
import { GET_ALL_SURAH } from "../../config"

const AllSurah = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        const getAllSurah = async () => {
            await axios.get(GET_ALL_SURAH)
            .then(res => {
                setData(res.data.data)
                setLoading(false)
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
        }

        getAllSurah()
        
    }, [])

    const getSurah = id => {
        history.push(`/surah/${id}`)
    }

    return (
        <div className="flex">
            <Navbar/>
            <div className="flex w-full flex-col lg:ml-24">
                <Header className="mb-3"/>
                <ListSurah className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-6 md:gap-4 gap-2">
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
                </ListSurah>
            </div>
        </div>
    )
}

export default AllSurah
