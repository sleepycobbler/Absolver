import Stance from './Stance.js';
import Move from './Move.js';

function Alt(props) {
    return (
        <div className="Absolver-altmove">
            <Stance dir={props.stances[4]}></Stance>
            <Move row={props.row} column={3} moveName={props.moveName} moveClick={props.moveClick} moveDelete={props.moveDelete}></Move>
            <Stance dir={props.stances[5]}></Stance>
        </div>
    );
}

export default Alt;