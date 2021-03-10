import React from 'react';
import Deckrow from './Deckrow';

/**
 * The deckbuilder is the main view of a given deck. It displays 4 Deckrow components, which form a 4x4 grid of moves.
 * @name Deckbuilder
 * @const
 * @param {function} moveClick - Click event that sets target row and column. 
 * @param {function} moveDelete - Click event that removes current move data from a target row and column
 * @param {Array[string]} deckArray - An array of move rows.
 * @param {Array[int]} stances - An array of stance positions.
 * @returns A div with 4 Deckrow components
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Deckbuilder = ({
  stances,
  row,
  deckArray,
  moveClick,
  moveDelete,
}) => (
  <div className="Absolver-deckbuilder">
    <Deckrow stances={stances[0]} row={0} rowState={deckArray[0]} moveClick={moveClick} moveDelete={moveDelete} />
    <Deckrow stances={stances[1]} row={1} rowState={deckArray[1]} moveClick={moveClick} moveDelete={moveDelete} />
    <Deckrow stances={stances[2]} row={2} rowState={deckArray[2]} moveClick={moveClick} moveDelete={moveDelete} />
    <Deckrow stances={stances[3]} row={3} rowState={deckArray[3]} moveClick={moveClick} moveDelete={moveDelete} />
  </div>
);



export default Deckbuilder;