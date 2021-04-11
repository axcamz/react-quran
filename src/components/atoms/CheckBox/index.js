const CheckBox = ({checked, label, id, onClick}) => {
    return (
        <div className="p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 rounded" onClick={onClick}>
            <input 
                readOnly
                type="checkbox" 
                checked={checked} 
                id={id}
            /> <span>{label}</span>
        </div>
    )
}

export default CheckBox
