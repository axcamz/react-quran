import "./Switch.css"

const Switch = ({checked, onClick}) => {
    return (
        <>
            <input onClick={onClick} className="switch" type="checkbox" checked={checked} id="test" />
            <label for="test"></label>
        </>
    )
}

export default Switch