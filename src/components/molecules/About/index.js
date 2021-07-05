import { ModalCenter } from "../../atoms"

const About = ({ 
        isOpen, 
        surahName, 
        nameTranslation, 
        nameInArabic, 
        revelation, 
        revelationInArabic, 
        tafsir, 
        totalVerses,
        onClick
    }) => {
    return (
        <ModalCenter visible={isOpen}>
            <div className="font-bold text-white fixed p-2 top-0 right-0 hover:bg-theme-400 rounded cursor-pointer" onClick={onClick}>X</div>
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl text-theme-800 dark:text-theme-500">{surahName}</h1>
                    <span className="md:text-xl text-lg">{nameTranslation}</span> <br/>
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

export default About
