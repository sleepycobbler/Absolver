import Combo from './Combo';
import Alt from './Alt';

function Deckrow(props) {
    return (
        <div className="Absolver-deckrow">
        <Combo value={props.value} rowState={props.rowState}></Combo>
        <Alt value={props.value} rowState={props.rowState[3]}></Alt>
        </div>
    );
}

export default Deckrow;