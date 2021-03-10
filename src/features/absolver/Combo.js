import Stance from './Stance';
import Move from './Move';

/**
 * This section represents the structure for a set of three moves, known as a combo.
 * @name Combo
 * @const
 * @param {function}      moveClick - Click event that sets target row and column. 
 * @param {function}      moveDelete - Click event that removes current move data from a target row and column
 * @param {int}           row - The row number.
 * @param {Array[string]} rowState - An array of move names.
 * @param {Array[int]}    stances - An array of stance positions.
 * @returns 
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Combo = ({
  moveClick,
  moveDelete,
  row,
  rowState,
  stances,
}) => (
  <div className="Absolver-combo">
    <Stance dir={stances[0]} />
    <Move row={row} column={0} moveName={rowState[0]} moveClick={moveClick} moveDelete={moveDelete} />
    <Stance dir={stances[1]} />
    <Move row={row} column={1} moveName={rowState[1]} moveClick={moveClick} moveDelete={moveDelete} />
    <Stance dir={stances[2]} />
    <Move row={row} column={2} moveName={rowState[2]} moveClick={moveClick} moveDelete={moveDelete} />
    <Stance dir={stances[3]} />
  </div>
);

export default Combo;