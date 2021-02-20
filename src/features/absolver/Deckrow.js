import Combo from './Combo';
import Alt from './Alt';

function Deckrow(props) {
    console.log("This is Deckrow: " + props.rowState);

    return (
        <div className="Absolver-deckrow">
        <Combo row={props.row} rowState={props.rowState} moveClick={props.moveClick}></Combo>
        <Alt row={props.row} moveName={props.rowState[3]} moveClick={props.moveClick}></Alt>
        </div>
    );
}

export default Deckrow;