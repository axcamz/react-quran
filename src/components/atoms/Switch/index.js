import "./Switch.css"

const Switch = ({checked, onClick}) => {
    return (
        <>
            <input readOnly onClick={onClick} className="switch" type="checkbox" checked={checked} id="test" />
            <label htmlFor="test"></label>
        </>
    )
}

export default Switch