import React from 'react';
import Deckrow from './Deckrow.js';

function Deckbuilder(props) {
    return (
        <div className="Absolver-deckbuilder">
            <Deckrow stances={props.stances[0]} row={0} rowState={props.deckArray[0]} moveClick={props.moveClick} moveDelete={props.moveDelete}></Deckrow>
            <Deckrow stances={props.stances[1]} row={1} rowState={props.deckArray[1]} moveClick={props.moveClick} moveDelete={props.moveDelete}></Deckrow>
            <Deckrow stances={props.stances[2]} row={2} rowState={props.deckArray[2]} moveClick={props.moveClick} moveDelete={props.moveDelete}></Deckrow>
            <Deckrow stances={props.stances[3]} row={3} rowState={props.deckArray[3]} moveClick={props.moveClick} moveDelete={props.moveDelete}></Deckrow>
        </div>);
}

export default Deckbuilder;