import { useContext } from "react";
import classNames from 'classnames'
import { GlobalContext } from "../../../context";
import { Arabic, ItalicLatin } from "../../atoms";

const AyahCard = ({ayah, number, tranlation, transliteration}) => {
    const {settingValue} = useContext(GlobalContext);
    const [settings] = settingValue
    const { terjemah, latin } = settings
    return (
        <div className="px-4 w-full border-b dark:text-blue-100 py-5 dark:border-gray-700 border-theme-200">
            <Arabic
                arab={ayah}
                number={number}
            />
            <div className="flex lg:flex-row flex-col font-poppins justify-between">
                <div className={classNames("font-poppins lg:max-w-xl 2xl:max-w-2xl  lg:pr-4 lg:order-1 order-2 overflow-hidden duration-300 transition-all", terjemah ? "max-h-96 mt-3":"max-h-0 mt-0")}>
                    <span>{tranlation}</span>
                </div>
                <ItalicLatin
                    isShowLatin={latin}
                    transliteration={transliteration}
                />
            </div>
        </div>
    )
    // else {
    //     return (
    //         <div className="text-right inline-block max-w-md bg-blue-400">
    //             <p className="font-serif dark:text-gray-50 text-4xl leading-normal py-6">{ayah}
    //                 <span className="mx-4 text-lg px-2 rounded-full border border-gray-500">{arabicNumber(number)}</span>
    //             </p>
    //         </div>
    //     )
    // }

}

export default AyahCard
