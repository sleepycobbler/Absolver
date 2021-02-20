import * as data from './Moves.js';

function Move(props) {
    console.log("This is Move1: " + props.moveName);
    if(['+','$','&'].includes(props.moveName)) {
        return (<div className="Absolver-move-plus" onClick={() => props.moveClick(props.moveName, props.row, props.column)}>{props.moveName}</div>);
    }
    console.log("This is Move2: " + props.moveName);
    var moveData = data.getBareHands().find(e => e['name'] === props.moveName);
    return (
        <div className="Absolver-move" onClick={() => props.moveClick(props.moveName, props.row, props.column)}>
            <img 
                src={"https://raw.githubusercontent.com/sleepycobbler/Absolver/main/src/images/" + props.moveName.toLowerCase().replaceAll(' ', '-') + ".png"}>
            </img>
            <div>{moveData["frames"]['startup'] + 'f'}</div>
        </div>);
}

export default Move;