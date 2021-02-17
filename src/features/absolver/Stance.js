function Stance(props) {
    return (
        <div className="Absolver-stance">
            <div className={typeof(props.value) === "number" ? "Absolver-stance-square-active" : "Absolver-stance-square-inactive"}>
                <div className={"Absolver-stance-pointer-" + String(props.value)}>
                </div>
            </div>
        </div>
    )
}

export default Stance;