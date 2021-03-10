import Combo from './Combo';
import Alt from './Alt';

/**
 * A deckrow symbolizes a single row within the Deckbuilder. It contains a combo, and an alt component.
 * @component
 * @param {Array.<int>} stances - An array of stance positions.
 * @param {int} row - The row number.
 * @param {Array.<string>} rowState - An array of move names.
 * @param {function} moveClick - Click event that sets target row and column. 
 * @param {function} moveDelete - Click event that removes current move data from a target row and column.
 * @returns A div containing a Combo and Alt component.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Deckrow = ({
  stances,
  row,
  rowState,
  moveClick,
  moveDelete,
}) => (
  <div className="Absolver-deckrow">
    <Combo stances={stances} row={row} rowState={rowState} moveClick={moveClick} moveDelete={moveDelete} />
    <Alt stances={stances} row={row} moveName={rowState[3]} moveClick={moveClick} moveDelete={moveDelete} />
  </div>
)

export default Deckrow;