import Stance from './Stance';
import Move from './Move';

/**
 * This section represents the structure for an Alternative move, or 'Alt' for short.
 * @name Alt
 * @const
 * @param {Array[int]} stances - The array of stances for the row of moves. 
 * @param {int} row - The row index number
 * @param {string} moveName - The name of the move.
 * @param {function} moveClick - The function to be triggered once the move is clicked.
 * @param {function} moveDelete - The function to be called once the delete action is selected. 
 * @returns A div containing a stance, a move, and another stance.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Alt = ({
  stances,
  row,
  moveName,
  moveClick,
  moveDelete,
}) => (
  <div className="Absolver-altmove">
      <Stance dir={stances[4]} />
      <Move row={row} column={3} moveName={moveName} moveClick={moveClick} moveDelete={moveDelete} />
      <Stance dir={stances[5]} />
  </div>
)

export default Alt;