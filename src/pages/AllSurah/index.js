import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../../components/Card"
import {Header, ListSurah, Navbar} from "../../components/index"

const AllSurah = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getAllSurah = async () => {
            await axios.get("http://localhost:3001/surah")
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data)
                
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
                <ListSurah className="grid grid-cols-3 gap-6">
                    {
                        data.map(surah => {
                            return (
                                <Card
                                    index={surah.number}
                                    lafadz={surah.name.short}
                                    name={surah.name.transliteration.id}
                                    arti={surah.name.translation.id}
                                />
                            )
                        })
                    }

                </ListSurah>
            </div>
        </div>
    )
}

export default AllSurah
