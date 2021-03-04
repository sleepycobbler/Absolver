import * as data from './Moves.js';

function Move(props) {
    if(['+','$','&'].includes(props.moveName)) {
        return (<div className="Absolver-move-plus" onClick={() => props.moveClick(props.moveName, props.row, props.column)}>{props.moveName}</div>);
    }
    var moveData = data.getBareHands().find(e => e['name'] === props.moveName);
    if (typeof moveData === 'undefined'){
        moveData = data.getSword().find(e => e['name'] === props.moveName);
    }
    return (
        <div className="Absolver-move-parent">
        <div className="Absolver-move" onClick={() => props.moveClick(props.moveName, props.row, props.column)}>
            <img 
                src={"https://raw.githubusercontent.com/sleepycobbler/Absolver/main/src/images/" + props.moveName.toLowerCase().replaceAll(' ', '-') + ".png"}>
            </img>
            <div>{moveData["frames"]['startup'] + 'f'}</div>
        </div>
        <div className='Absolver-move-delete' onClick={() => props.moveDelete(props.moveName)}>Delete</div>
        </div>);
}

export default Move;