import React from 'react';
import Movelist from './Movelist.js';
import Combo from './Combo.js';
import Alt from './Alt.js';

function Movechooser(props) {
    return (
        <div className="Absolver-movechooser">
            {(props.column < 3) ? 
                <Combo stances={props.stances[props.row]} row={props.row} rowState={props.deckArray[props.row] } moveClick={props.moveClick}></Combo> :
                <Alt stances={props.stances[props.row]} row={props.row} moveName={props.deckArray[props.row][props.column]} moveClick={props.moveClick}></Alt>}
            <Movelist row={props.row} column={props.column} deckType={props.deckType} rowClick={props.rowClick}></Movelist>
        </div>) 
}

export default Movechooser;