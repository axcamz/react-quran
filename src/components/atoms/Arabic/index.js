const Arabic = ({arab, number}) => {

    const arabicNumber = (value) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return String(value).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
    }
    return (
        <div className="text-right max-w-3xl ml-auto">
            <p className="font-serif md:text-4xl md:leading-relaxed text-3xl leading-normal">{arab}
                <span className="mr-5 text-lg px-2 rounded-full border border-gray-500">{arabicNumber(number)}</span>
            </p>
        </div>
    )
}

export default Arabic
