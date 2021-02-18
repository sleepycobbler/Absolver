import React from 'react';
import Movelist from './Movelist.js';
import Combo from './Combo.js';
import Alt from './Alt.js';

function Movechooser(props) {
    return (
        <div className="Absolver-movechooser">
            {(props.column < 3) ? 
                <Combo row={props.row} rowState={props.deckArray[props.row] } moveClick={props.moveClick}></Combo> :
                <Alt row={props.row} moveName={props.deckArray[props.row][props.column]} moveClick={props.moveClick}></Alt>}
            <Movelist></Movelist>
        </div>) 
}

export default Movechooser;