import { useState } from "react";
import classNames from 'classnames'

const AyahCard = ({ayah, number, tranlation, transliteration, settings}) => {
    const [focusMode, setFocusMode] = useState(false)
    const settingsAyah = settings;


    const arabicNumber = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }

    if(focusMode === false){
        const { terjemah, latin } = settingsAyah
        return (
            <div className="px-4 w-full border-b dark:text-blue-100 py-5 dark:border-gray-700 border-gray-200">
                <div className="text-right max-w-3xl ml-auto">
                    <p className="font-serif md:text-4xl text-3xl leading-normal">{ayah}
                    <span className="mr-5 text-lg px-2 rounded-full border border-gray-500">{arabicNumber(number)}</span>
                    </p>
                </div>
                <div className="flex font-poppins justify-between">
                    <div className={classNames("font-poppins max-w-2xl overflow-hidden duration-300 transition-all", terjemah ? "max-h-96 mt-3":"max-h-0 mt-0")}>
                        <span>
                            {tranlation}
                        </span>
                    </div>
                    <div className={classNames("font-poppins max-w-xl overflow-hidden duration-300 transition-all", latin ? "max-h-96 mt-3":"max-h-0 mt-0")}>
                        <span className="font-light italic">
                            {transliteration}
                        </span>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div className="text-right inline-block max-w-md bg-blue-400">
                <p className="font-serif dark:text-gray-50 text-4xl leading-normal py-6">{ayah}
                    <span className="mx-4 text-lg px-2 rounded-full border border-gray-500">{arabicNumber(number)}</span>
                </p>
            </div>
        )
    }

}

export default AyahCard
