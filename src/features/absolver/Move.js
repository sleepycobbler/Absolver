import * as data from './Moves.js';

function Move(props) {
    if(props.value === "+") {
        return (<div className="Absolver-move-plus">{props.value}</div>);
    }
    var moveData = data.getBareHands().find(e => e['name'] === props.value)
    return (
        <div className="Absolver-move">
            <img 
                src={"https://raw.githubusercontent.com/sleepycobbler/Absolver/main/src/images/" + props.value.toLowerCase().replaceAll(' ', '-') + ".png"}>
            </img>
            <div>{moveData["frames"]['startup'] + 'f'}</div>
        </div>);
}

export default Move;