import Movebar from './Movebar';
import filterMoves from './filter'
import Stance from './Stance';
import React from 'react';

/**
 * Creates a list of moves in column form. Contains the movebar component, and then a 
 * custom made table.
 * @component
 * @param {string} deckType - The current type of deck (barehands, wargloves, or sword)
 * @param {int} column - The current target column number.
 * @param {int} row - The current target row number.
 * @param {Array.<Array.<string>>} usedMoves - The current moves within the deck.
 * @param {Array.<int>} stances - The stances for the current row.
 * @param {function} rowClick - The event that triggers when a row within the list is clicked on.
 * @returns A div with a movebar component, and a table listing all moves available.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const mergeStance = (stanDict) => {
  var stan1 = Number(Object.keys(stanDict)[0])
  var stan2 = Number(Object.keys(stanDict)[1])
  var stan3 = Number(Object.values(stanDict)[0])
  var stan4 = Number(Object.values(stanDict)[1])
  switch ([stan1, stan2, stan3, stan4].join('')) {
    case '0110':
    case '1001':
      return (
        <React.Fragment>
          <td><Stance dir={4} /></td>
          <td><Stance dir={5} /></td>
        </React.Fragment>
      );
    case '0101':
    case '1010':
      return (
        <React.Fragment>
          <td><Stance dir={4} /></td>
          <td><Stance dir={4} /></td>
        </React.Fragment>
      );
    case '0132':
    case '1023':
      return (
        <React.Fragment>
          <td><Stance dir={4} /></td>
          <td><Stance dir={6} /></td>
        </React.Fragment>
      );
    case '0123':
    case '1032':
      return (
        <React.Fragment>
          <td><Stance dir={4} /></td>
          <td><Stance dir={7} /></td>
        </React.Fragment>
      );
    case '3232':
    case '2323':
      return (
        <React.Fragment>
          <td><Stance dir={6} /></td>
          <td><Stance dir={6} /></td>
        </React.Fragment>
      );
    case '3223':
    case '2332':
      return (
        <React.Fragment>
          <td><Stance dir={6} /></td>
          <td><Stance dir={7} /></td>
        </React.Fragment>
      );
    case '3201':
    case '2310':
      return (
        <React.Fragment>
          <td><Stance dir={6} /></td>
          <td><Stance dir={4} /></td>
        </React.Fragment>
      );
    case '3210':
    case '2301':
      return (
        <React.Fragment>
          <td><Stance dir={6} /></td>
          <td><Stance dir={5} /></td>
        </React.Fragment>
      );
    default:
      break;
  }
  console.log(stanDict)
}

const Movelist = ({
  usedMoves,
  deckType,
  rowClick,
  row,
  column,
  stances,
}) => {
  var moveData = filterMoves(usedMoves, deckType, column, stances);
  var movesDeckType = deckType==='sword' ?  'sword': 'barehands';

  const moves = moveData.map(move => {
    var myKeys = Object.keys(move['stance'][movesDeckType]);
    return (
      <tr className={'rowMove'} key={move['name']} onClick={() => rowClick(move['name'], row, column, deckType)}>
        <td>{move['name']}</td>
        <td>{move['style']}</td>
        <td>{move['type']}</td>
        <td>{move['power']}</td>
        <td>{move['stats']['str']}</td>
        <td>{move['stats']['dex']}</td>
        <td>{move['stats']['mob']}</td>
        <td>{move['damage']}</td>
        <td>{move['range']}</td>
        <td>{move['stamina']}</td>
        <td>{move['impact']}</td>
        <td>{move['frames']['startup']}</td>
        <td>{move['frames']['advantage']['hit']}</td>
        <td>{move['frames']['advantage']['guard']}</td>
        {myKeys.length === 1 ?
          <React.Fragment>
            <td><Stance dir={myKeys[0]} /></td>
            <td><Stance dir={move['stance'][deckType][myKeys[0]]} /></td>
          </React.Fragment>
          :
          mergeStance(move['stance'][movesDeckType])
      }
      </tr>
    );
  });

  return (
    <div className="Absolver-movelist">
      <Movebar />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Style</th>
            <th>Type</th>
            <th>Pwr</th>
            <th>Str</th>
            <th>Dext</th>
            <th>Mob</th>
            <th>Dmg</th>
            <th>Rng</th>
            <th>Stam</th>
            <th>Impact</th>
            <th>Start</th>
            <th>Adv: Hit</th>
            <th>Adv:Guard</th>
            <th>Starts in</th>
            <th>Ends in</th>
          </tr>
        </thead>
        <tbody>{moves}</tbody>
      </table>
    </div>
  )
}

export default Movelist;