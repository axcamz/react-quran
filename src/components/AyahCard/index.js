import { useState } from "react";

const AyahCard = ({ayah, number, tranlation}) => {
    const [focusMode, setFocusMode] = useState(false)
    const [showTransl, setShowTransl] = useState(true)


    const arabicNumber = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }

    if(focusMode === false){
        return (
            <div className="px-4 w-full border-b dark:text-blue-100 transition-all py-4 dark:border-gray-700 border-gray-200">
                <div className="text-right max-w-3xl ml-auto">
                    <p className="font-serif text-4xl leading-normal">{ayah}
                    <span className="mr-5 text-lg px-2 rounded-full border border-gray-500">{arabicNumber(number)}</span>
                    </p>
                </div>
                {
                    showTransl && (
                        <div className="font-poppins max-w-2xl mt-1">
                            <span>
                                {tranlation}
                            </span>
                        </div>

                    )
                }
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
