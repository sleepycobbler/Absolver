import Combo from './Combo';
import Alt from './Alt';

function Deckrow(props) {
    return (
        <div className="Absolver-deckrow">
        <Combo stances={props.stances} row={props.row} rowState={props.rowState} moveClick={props.moveClick}></Combo>
        <Alt stances={props.stances} row={props.row} moveName={props.rowState[3]} moveClick={props.moveClick}></Alt>
        </div>
    );
}

export default Deckrow;