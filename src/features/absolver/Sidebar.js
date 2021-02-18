function Sidebar(props) {
    return (
        <div style={{width: props.active ? "200px" : "0px"}} className="Absolver-sidebar">
            <a className="closebtn" onClick={props.onClick}>&times;</a>
            <a onClick={() => props.onDeckChange('barehands')}>Bare Hands</a>
            <a onClick={() => props.onDeckChange('wargloves')}>Wargloves</a>
            <a onClick={() => props.onDeckChange('sword')}>Sword</a>
        </div>)
}

export default Sidebar;