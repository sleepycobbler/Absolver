import * as data from './Moves';

/**
 * Represents a single move, displaying quick statistics and the picture.
 * @component
 * @param {int} row - The current row number.
 * @param {int} column - The current column number.
 * @param {string} moveName - The name of the current move.
 * @param {function} moveClick - The function that triggers when a move is clicked.
 * @param {function} moveDelete - The function that triggers when a move needs to be deleted.
 * @returns A div, containing either the data of a move, or a simple symbol.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Move = ({moveName, moveClick, row, column, moveDelete}) => {
  if(['+','$','&'].includes(moveName)) {
    return (<div className="Absolver-move-plus" onClick={() => moveClick(moveName, row, column)}>{moveName}</div>);
  }
  var moveData = data.getBareHands().find(e => e['name'] === moveName);
  if (typeof moveData === 'undefined'){
    moveData = data.getSword().find(e => e['name'] === moveName);
  }
  return (
    <div className="Absolver-move-parent">
    <div className="Absolver-move" onClick={() => moveClick(moveName, row, column)}>
      <img 
        alt={moveName} 
        src={
          "https://raw.githubusercontent.com/sleepycobbler/Absolver/main/src/images/" 
          + moveName.toLowerCase().replaceAll(' ', '-') + ".png"
        }
      />
      <div>{moveData["frames"]['startup'] + 'f'}</div>
    </div>
    <div className='Absolver-move-delete' onClick={() => moveDelete(moveName)}>Delete</div>
    </div>
  );
}

export default Move;