import Stance from './Stance.js';
import Move from './Move.js';

function Combo(props) {
    return (
    <div className="Absolver-combo">
        <Stance value={props.value}></Stance>
        <Move value={props.rowState[0]}></Move>
        <Stance></Stance>
        <Move value={props.rowState[1]}></Move>
        <Stance></Stance>
        <Move value={props.rowState[2]}></Move>
        <Stance></Stance>
    </div>)
}

export default Combo;