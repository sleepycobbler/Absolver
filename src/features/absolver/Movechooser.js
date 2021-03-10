import React from 'react';
import Movelist from './Movelist';
import Combo from './Combo';
import Alt from './Alt';

/**
 * A representation of the interface that the deckbuilder goes into when a move slot is selected.
 * @component
 * @param {int}        column - The current column number.
 * @param {int}        row - The current row number.
 * @param {Array.<int>} stances - The current list of stance direction values. 
 * @param {Array.<Array.<string>>} deckArray - The list of moves in a 4x4 grid.
 * @param {function} moveClick - The event that triggers when a move is clicked.
 * @param {function} rowClick - The event that switches the current row focus.
 * @param {function} moveDelete - The event that wipes the move name from the current row and column position
 * @param {string}   deckType - The current deck type (either barehands, wargloves, or sword)
 * @returns A div that contains either a combo or alt component, along with a Movelist component
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Movechooser = ({
  column,
  stances,
  row,
  deckArray,
  moveClick,
  rowClick,
  moveDelete,
  deckType,
}) => (
  <div className="Absolver-movechooser">
      {
        (column < 3) ? 
          <Combo stances={stances[row]} row={row} rowState={deckArray[row] } moveClick={moveClick} moveDelete={moveDelete} /> :
          <Alt stances={stances[row]} row={row} moveName={deckArray[row][column]} moveClick={moveClick} moveDelete={moveDelete} />
      }
      <Movelist usedMoves={deckArray} stances={stances[row]} row={row} column={column} deckType={deckType} rowClick={rowClick} />
  </div>
);

export default Movechooser;