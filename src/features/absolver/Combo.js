import Stance from './Stance.js';
import Move from './Move.js';
import { selectStanceDiamonds } from './slices/loadoutSlice.js';

function Combo(props) {
    return (
    <div className="Absolver-combo">
        <Stance dir={props.stances[0]}></Stance>
        <Move row={props.row} column={0} moveName={props.rowState[0]} moveClick={props.moveClick}></Move>
        <Stance dir={props.stances[1]}></Stance>
        <Move row={props.row} column={1} moveName={props.rowState[1]} moveClick={props.moveClick}></Move>
        <Stance dir={props.stances[2]}></Stance>
        <Move row={props.row} column={2} moveName={props.rowState[2]} moveClick={props.moveClick}></Move>
        <Stance dir={props.stances[3]}></Stance>
    </div>)
}

export default Combo;