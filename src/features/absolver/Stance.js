function Stance(props) {
    return (
        <div className="Absolver-stance">
            <div className={[0, 1, 2, 3].includes(props.dir) ? "Absolver-stance-square-active" : "Absolver-stance-square-inactive"}>
                <div className={"Absolver-stance-pointer-" + String(props.dir)}>
                </div>
            </div>
        </div>
    )
}

export default Stance;