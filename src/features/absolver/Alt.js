import Stance from './Stance.js';
import Move from './Move.js';

function Alt(props) {
    return (
        <div className="Absolver-altmove">
            <Stance dir={props.row}></Stance>
            <Move row={props.row} column={3} moveName={props.moveName} moveClick={props.moveClick}></Move>
            <Stance></Stance>
        </div>
    );
}

export default Alt;