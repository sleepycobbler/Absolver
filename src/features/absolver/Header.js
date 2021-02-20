function Header(props) {
    return (
        <div className="Absolver-header">
            <span className="Absolver-sidebar-open" onClick={() => props.onClick()}>&#9776;</span>
            {props.activeMove === 'none' ? "" :
            <span className='Absolver-sidebar-open' onClick={() => props.onGoBack()}>Yo Bro Go Back</span> }
            <h1>Absolver Deckbuilder</h1>
        </div>)
}

export default Header;