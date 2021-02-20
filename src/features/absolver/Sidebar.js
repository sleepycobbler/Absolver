function Sidebar(props) {
    console.log(props.deckChange);
    return (
        <div style={{width: props.active ? "200px" : "0px"}} className="Absolver-sidebar">
            <a className="closebtn" onClick={() => props.onClick()}>&times;</a>
            <a onClick={() => props.deckChange('barehands')}>Bare Hands</a>
            <a onClick={() => props.deckChange('wargloves')}>Wargloves</a>
            <a onClick={() => props.deckChange('sword')}>Sword</a>
        </div>)
}

export default Sidebar;