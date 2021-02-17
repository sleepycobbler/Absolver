function Sidebar(props) {
    return (
        <div style={{width: props.active ? "200px" : "0px"}} className="Absolver-sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={props.onClick}>&times;</a>
            <a href="#">Bare Hands</a>
            <a href="#">Wargloves</a>
            <a href="#">Sword</a>
        </div>)
}

export default Sidebar;