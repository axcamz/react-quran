import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AyahCard, Header } from "../../components"
import { DropDown } from "../../components/Icons"

import classNames from "classnames"
import { GET_SURAH } from "../../config"
import { Settings } from "../../components/molecules"

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
        <div className="dark:bg-gray-800">
            {
                !loading && <>
                    <Header 
                        surah
                        className="mb-3"
                        surahName={data.name.transliteration.id}
                        settings={(data) => setSettings(data)}
                    >
                        <div onClick={() => setOpen(!open)} className="md:text-lg text-sm py-2 px-3 dark:text-gray-50 bg-white dark:bg-gray-700 shadow-lg w-max rounded-md font-medium font-poppins flex items-center cursor-pointer hover:shadow-xl transition-all z-20">
                            <span>Settings</span>
                            <div>
                                <DropDown className={classNames("h-6 w-6 text-gray-900 ml-3 transform transition-transform dark:text-blue-100", open ? "rotate-180":"")}/>
                            </div>
                        </div>
                        <div className={classNames("bg-white dark:bg-gray-700 shadow-lg w-72 p-3 absolute opacity-0 transition-all right-5 -top-3 z-10 rounded transform", open ? "opacity-100 visible translate-y-20":"invisible")}>
                            <Settings settings={data => setSettings(data)}/>
                        </div>
                    </Header>
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
