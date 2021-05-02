import { ModalCenter } from "../../atoms"

const MetaSurah = ({ 
        openMeta, 
        surahName, 
        nameTranslation, 
        nameInArabic, 
        revelation, 
        revelationInArabic, 
        tafsir, 
        totalVerses 
    }) => {
    return (
        <ModalCenter visible={openMeta}>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl text-theme-800 dark:text-theme-500">{surahName}</h1>
                    <span className="text-xl">{nameTranslation}</span> <br/>
                    <span className="italic">{revelation}</span> <br/>
                    <span className="text-sm">{totalVerses} Ayah</span> 
                </div>
                <div>
                    <h1 className="md:text-3xl text-xl">{nameInArabic} <span className="text-lg">({revelationInArabic})</span></h1>
                </div>
            </div>
            <span className="font-bold mt-5 block">Tafsir :</span>
            <div className="mt-2 md:text-lg text-base">
                {tafsir}
            </div>
        </ModalCenter>
    )
}

export default MetaSurah
