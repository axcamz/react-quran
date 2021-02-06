import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AyahCard } from "../../components"
import { DropDownIcon } from "../../components/Icons"

import classNames from "classnames"
import { GET_SURAH } from "../../config"
import { SettingsCard } from "../../components/molecules"
import { Header } from "../../components/organisms"

const Surah = (props) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {id: ayahId} = useParams()
    const [settings, setSettings] = useState({})

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const getAllAyah = async () => {
            await axios.get(GET_SURAH(ayahId))
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
        <div className="dark:bg-gray-800 min-h-screen">
            {
                !loading && <>
                    <Header 
                        surah
                        surahName={data.name.transliteration.id}
                    />
                    {
                        ayah.map(ayah => {
                            return (
                                <AyahCard 
                                    key={ayah.number.inSurah}
                                    ayah={ayah.text.arab}
                                    number={ayah.number.inSurah}
                                    tranlation={ayah.translation.id}
                                    transliteration={ayah.text.transliteration.en}
                                    settings={settings}
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
