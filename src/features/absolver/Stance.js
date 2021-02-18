function Stance(props) {
    return (
        <div className="Absolver-stance">
            <div className={typeof(props.dir) === "number" ? "Absolver-stance-square-active" : "Absolver-stance-square-inactive"}>
                <div className={"Absolver-stance-pointer-" + String(props.dir)}>
                </div>
            </div>
        </div>
    )
}

export default Stance;