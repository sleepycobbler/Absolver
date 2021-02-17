import Stance from './Stance.js';
import Move from './Move.js';

function Alt(props) {
    return (
        <div className="Absolver-altmove">
            <Stance value={props.value}></Stance>
            <Move value={props.rowState}></Move>
            <Stance></Stance>
        </div>
    );
}

export default Alt;