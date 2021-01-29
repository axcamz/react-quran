import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AyahCard } from "../../components"

const Surah = () => {
    const [ayah, setAyah] = useState([])
    const {id: ayahId} = useParams()

    useEffect(() => {
        console.log(ayahId);
        const getAllAyah = async () => {
            await axios.get(`http://localhost:3001/surah/${ayahId}`)
            .then(res => {
                console.log(res);
                setAyah(res)
                console.log(ayah);
            })
            .catch(err => {
                console.log(err);
            })
        }

        getAllAyah()

    }, [])

    return (
        <div>

            
            {/* {
                ayah && ayah.verses.map(ayah => {
                    return (
                        <AyahCard ayah={ayah}/>
                    )
                })
            } */}
        </div>
    )
}

export default Surah
