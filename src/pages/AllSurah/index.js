import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import {Header, ListSurah, Navbar} from "../../components/index"
import SurahCardSkeleton from "../../components/Skeleton/SurahCardSkeleton"

const AllSurah = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAllSurah = async () => {
            await axios.get("http://192.168.43.55:3001/surah")
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data)
                setLoading(false)
            }, () => console.log(data))
            .catch(err => {
                console.log(err);
            })
        }
        
        getAllSurah()
    }, [])


    return (
        <div className="flex">
            <Navbar/>
            <div className="flex w-full flex-col">
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
