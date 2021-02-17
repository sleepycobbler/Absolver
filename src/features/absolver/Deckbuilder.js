import React from 'react';
import Deckrow from './Deckrow.js';

function Deckbuilder(props) {
    return (
        <div className="Absolver-deckbuilder">
            <Deckrow value={0} rowState={props.deckArray[0]}></Deckrow>
            <Deckrow value={1} rowState={props.deckArray[1]}></Deckrow>
            <Deckrow value={2} rowState={props.deckArray[2]}></Deckrow>
            <Deckrow value={3} rowState={props.deckArray[3]}></Deckrow>
        </div>);
}

export default Deckbuilder;