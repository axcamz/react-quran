import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AyahCard, Header } from "../../components"

const Surah = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {id: ayahId} = useParams()

    useEffect(() => {
        const getAllAyah = async () => {
            await axios.get(`http://localhost:3001/surah/${ayahId}`)
            .then(res => {
                console.log(res.data.data);
                setData(res.data.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
                setLoading(true)
            })
        }

        getAllAyah()

    }, [])

    const ayah = data.verses

    return (
        <div className="dark:bg-gray-800">
            {
                !loading && <>
                    <Header 
                        surah
                        className="mb-3"
                        surahName={data.name.transliteration.id}
                    />
                    {
                        ayah.map(ayah => {
                            return (
                                <AyahCard 
                                    ayah={ayah.text.arab}
                                    number={ayah.number.inSurah}
                                    tranlation={ayah.translation.id}
                                />
                            )
                        })
                    }
                </>
            }
            {
                loading && <h1>Loading</h1>
            }
        </div>
    )
}

export default Surah
