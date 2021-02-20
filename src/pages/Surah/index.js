import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AyahCard } from "../../components"

import { GET_SURAH } from "../../config"
import { Header } from "../../components/organisms"
import { ChevronUp } from "../../components/Icons"
import { Bismillah } from "../../components/atoms"

const Surah = (props) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {id: ayahId} = useParams()
    const [settings, setSettings] = useState({})
    const [showHeader, setShowHeader] = useState(true)

    
    // Scroll to Top
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
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
        // document.body.classList.remove("dark:bg-gray-900")
        // document.body.classList.add("dark:bg-gray-800")

        let prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setShowHeader(true)
            } else {
                setShowHeader(false)
            }
            prevScrollpos = currentScrollPos;
        }


        getAllAyah()

        // Function for Unmount Component
        // return () => {
        //     document.body.classList.remove("dark:bg-gray-800")
        //     document.body.classList.add("dark:bg-gray-900")
        // }
    }, [])

    const ayah = data.verses

    return (
        <div className="dark:bg-gray-900 min-h-screen">
            {
                !loading && <>
                    <Header 
                        surah
                        surahName={data.name.transliteration.id}
                        className={`${showHeader ? "top-0":"-top-16"}`}
                    />
                    <div className="pt-16 lg:pt-10">
                        {
                            data.preBismillah.text.arab && <>
                                <Bismillah content={data.preBismillah.text.arab}/>
                            </>
                        }
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
                    </div>
                    <div onClick={() => scrollTop()} className={`px-2 py-2 cursor-pointer rounded-full fixed transition-all duration-300 bottom-6 dark:bg-gray-700 ${showHeader ? "right-6":"-right-12"}`}>
                        <ChevronUp className="h-8 w-8 text-white"/>
                    </div>
                </>
            }
            {
                loading && <h1>Loading</h1>
            }
        </div>
    )
}

export default Surah
