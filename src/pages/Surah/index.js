import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GET_SURAH } from "../../config"
import { Header } from "../../components/organisms"
import { ChevronUp } from "../../components/Icons"
import { Bismillah } from "../../components/atoms"
import { AyahCard, About } from "../../components/molecules"
import AyahCardSkeleton from "../../components/Skeleton/AyahCardSkeleton"

const Surah = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {id: ayahId} = useParams()
    const [showHeader, setShowHeader] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    
    // Scroll to Top
    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
    useEffect(() => {
        // Fetching data
        const getAllAyah = async () => {
            await axios.get(GET_SURAH(ayahId))
            .then(res => {
                const result = res.data.data
                setData(result)
                setLoading(false)
                window.scrollTo({top: 0, behavior: "auto"})
                document.title = `${result.name.transliteration.id} : ${result.number}`
            })
            .catch(err => {
                console.log(err);
                setLoading(true)
            })
        }
        
        // document.body.classList.remove("dark:bg-gray-900")
        // document.body.classList.add("dark:bg-gray-800")
        const _showHeader = () => {
            let prevScrollpos = window.pageYOffset+1;
            window.onscroll = function() {
                let currentScrollPos = window.pageYOffset ?? 0;
                if (prevScrollpos > currentScrollPos) {
                    setShowHeader(true)
                } else {
                    setShowHeader(false)
                }
                prevScrollpos = currentScrollPos;
            }
        }
        
        
        getAllAyah()
        _showHeader()
        
        // Function for Unmount Component
        // return () => {
        //     document.body.classList.remove("dark:bg-gray-800")
        //     document.body.classList.add("dark:bg-gray-900")
        // }

        return () => {
            // Change Back to default Title
            document.title = "Quran"
            setShowHeader(true)
        }
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
                        onClick={() => setOpenModal(!openModal)}
                    />
                    <About
                        onClick={() => setOpenModal(!openModal)}
                        isOpen={openModal}
                        surahName={data.name.transliteration.id}
                        nameInArabic={data.name.long}
                        nameTranslation={data.name.translation.id}
                        revelation={data.revelation.id}
                        revelationInArabic={data.revelation.arab}
                        totalVerses={data.numberOfVerses}
                        tafsir={data?.tafsir?.id}
                    />
                    <div className="pt-16 lg:pt-10">
                        {
                            data.preBismillah && <Bismillah content={data.preBismillah.text.arab}/>
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
                loading && <AyahCardSkeleton/>
            }
            
        </div>
    )
}

export default Surah
