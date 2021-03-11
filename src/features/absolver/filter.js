import * as data from './Moves';

/**
 * A function to filter moves based on deck type, column, stances, and used moves.
 * @param {string} deckType - The current type of deck (barehands, wargloves, or sword)
 * @param {int} column - The current target column number.
 * @param {Array.<int>} stances - The current stances within the row.
 * @param {Array.<string>} usedMoves - A list of the moves that are already selected.
 * @returns {Array.<string>} An array of filtered move names.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const filterMoves = (
  usedMoves, 
  deckType, 
  column, 
  stances,
  moveSort
) => {
  var movesDeckType = deckType === 'sword' ? 'sword' : 'barehands';
  var stance1;
  var stance2;
  var stanceAlt;

  switch (column) {
    case 0:
      stance1 = stances[0];
      stance2 = stances[1];
      break;
    case 1:
      stance1 = stances[1];
      stance2 = stances[2];
      stanceAlt = stances[3];
      break;
    case 2:
      stanceAlt = stances[1];
      stance1 = stances[2];
      stance2 = stances[3];
      break;
    case 3:
      stance1 = stances[4];
      stance2 = stances[5];
      break;
    default:
      break;
  }
  var moveData = data.getBareHands()
  if (movesDeckType === 'sword') {
    moveData = moveData.filter(x => x['stance']['sword'] !== false)
    moveData = moveData.concat(data.getSword())
  }
  if (stance1 > 3 && stance2 > 3) {
    if (column === 1 && stanceAlt > 3) {
      switch (stance2) {
        case 4:
        case 5:
          moveData = moveData.filter(
            x => Object.values(x['stance'][movesDeckType]).includes(0) ||
                 Object.values(x['stance'][movesDeckType]).includes(1)
          );
          break;
        case 6:
        case 7:
          moveData = moveData.filter(
            x => Object.values(x['stance'][movesDeckType]).includes(2) ||
                 Object.values(x['stance'][movesDeckType]).includes(3)
          );
          break;
        default:
          break;
      }
    } else if (column === 2 && stanceAlt > 3) {
      switch (stance1) {
        case 4:
        case 5:
          moveData = moveData.filter(
            x => Object.keys(x['stance'][movesDeckType]).includes('0') ||
                 Object.keys(x['stance'][movesDeckType]).includes('1')
          );
          break;
        case 6:
        case 7:
          moveData = moveData.filter(
            x => Object.keys(x['stance'][movesDeckType]).includes('2') ||
                 Object.keys(x['stance'][movesDeckType]).includes('3')
          );
          break;
        default:
          break;
      }
    }
  } else if (stance1 > 3) {
    switch (stance1) {
      case 4:
      case 5:
        moveData = moveData.filter(
          x => Object.keys(x['stance'][movesDeckType]).includes('0') ||
               Object.keys(x['stance'][movesDeckType]).includes('1')
        );
        break;
      case 6:
      case 7:
        moveData = moveData.filter(
          x => Object.keys(x['stance'][movesDeckType]).includes('2') ||
               Object.keys(x['stance'][movesDeckType]).includes('3')
        );
        break;
      default:
        break;
    }
  } else if (stance2 > 3 && stance1 > -1) {
    switch (stance2) {
      case 4:
      case 5:
        moveData = moveData.filter(
          x => Object.values(x['stance'][movesDeckType]).includes(0) ||
               Object.values(x['stance'][movesDeckType]).includes(1)
        );
        break;
      case 6:
      case 7:
        moveData = moveData.filter(
          x => Object.values(x['stance'][movesDeckType]).includes(2) ||
               Object.values(x['stance'][movesDeckType]).includes(3)
        );
        break;
      default:
        break;
    }
    moveData = moveData.filter(
      x => Object.keys(x['stance'][movesDeckType]).includes(stance1.toString())
    );
  } else if (stance2 > 3) {
    switch (stance2) {
      case 4:
      case 5:
        moveData = moveData.filter(
          x => Object.values(x['stance'][movesDeckType]).includes(0) ||
               Object.values(x['stance'][movesDeckType]).includes(1)
        );
        break;
      case 6:
      case 7:
        moveData = moveData.filter(
          x => Object.values(x['stance'][movesDeckType]).includes(2) ||
               Object.values(x['stance'][movesDeckType]).includes(3)
        );
        break;
      default:
        break;
    }
  } else if (column === 3) {
    moveData = moveData.filter(
      x => Object.keys(x['stance'][movesDeckType]).includes(stance1.toString())
    );
    moveData = moveData.filter(
      x => x['stance'][movesDeckType][stance1] !== stance1
    );
  } else {
    if (stance1 > -1) {
      moveData = moveData.filter(
        x => Object.keys(x['stance'][movesDeckType]).includes(stance1.toString())
      );
    }
    if (stance2 > -1) {
      moveData = moveData.filter(
        x => Object.values(x['stance'][movesDeckType]).includes(stance2)
      );
    }
  }

  for (var row of usedMoves) {
    for (var usedMove of row) {
      moveData = moveData.filter(
        x => x['name'] !== usedMove
      );
    }
  }

  switch (moveSort) {
    case 'hit':
    case 'guard':
      moveData = moveData.sort((a, b) => (a['frames']['advantage'][moveSort] - b['frames']['advantage'][moveSort]));
      break;
    case 'startup':
      moveData = moveData.sort((a, b) => (a['frames'][moveSort] - b['frames'][moveSort]));
      break;
    default:
      moveData = moveData.sort((a, b) => (a[moveSort] - b[moveSort]));
      break;
  }
  

  return moveData;
}

export default filterMoves;