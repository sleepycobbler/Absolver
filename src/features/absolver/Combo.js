import Stance from './Stance.js';
import Move from './Move.js';

function Combo(props) {
    return (
    <div className="Absolver-combo">
        <Stance dir={props.row}></Stance>
        <Move row={props.row} column={0} moveName={props.rowState[0]} moveClick={props.moveClick}></Move>
        <Stance></Stance>
        <Move row={props.row} column={1} moveName={props.rowState[1]} moveClick={props.moveClick}></Move>
        <Stance></Stance>
        <Move row={props.row} column={2} moveName={props.rowState[2]} moveClick={props.moveClick}></Move>
        <Stance></Stance>
    </div>)
}

export default Combo;