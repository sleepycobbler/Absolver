import React from 'react';
import Deckrow from './Deckrow.js';

function Deckbuilder(props) {
    console.log(props.deckArray);

    return (
        <div className="Absolver-deckbuilder">
            <Deckrow row={0} rowState={props.deckArray[0]} moveClick={props.moveClick}></Deckrow>
            <Deckrow row={1} rowState={props.deckArray[1]} moveClick={props.moveClick}></Deckrow>
            <Deckrow row={2} rowState={props.deckArray[2]} moveClick={props.moveClick}></Deckrow>
            <Deckrow row={3} rowState={props.deckArray[3]} moveClick={props.moveClick}></Deckrow>
        </div>);
}

export default Deckbuilder;