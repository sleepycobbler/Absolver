import * as data from './Moves.js';

function mergeStance(stanDict) {
  var stan1 = Number(Object.keys(stanDict)[0])
  var stan2 = Number(Object.keys(stanDict)[1])
  var stan3 = Number(Object.values(stanDict)[0])
  var stan4 = Number(Object.values(stanDict)[1])
  switch ([stan1, stan2, stan3, stan4].join('')) {
    case '0110':
    case '1001':
      return [4, 5, 5, 4];
    case '0101':
    case '1010':
      return [4, 4, 5, 5];
    case '0132':
    case '1023':
      return [4, 6, 5, 7];
    case '0123':
    case '1032':
      return [4, 7, 5, 6];
    case '3232':
    case '2323':
      return [6, 6, 7, 7];
    case '3223':
    case '2332':
      return [6, 7, 7, 6];
    case '3201':
    case '2310':
      return [6, 4, 7, 5];
    case '3210':
    case '2301':
      return [6, 5, 7, 4];
  }
}

function updateStances(stances, moves, decktype) {
  var moveSet = decktype == 'sword' ? 'sword' : 'barehands';
  var moveData;
  moveSet == 'sword' ? moveData = data.getSword() : moveData = data.getBareHands()
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (moves[i][j] !== '+') {
        var moveStances = moveData.find(x => x['name'] == moves[i][j])['stance'][moveSet];
        let b4Move = moves[i][j - 1];
        let nxMove = moves[i][j + 1];
        let doublesStances = mergeStance(moveStances);
        switch (j) {
          case 0:
            stances[i][1] = moveStances[i];
            break;
          case 1:
            if (b4Move === '+' && nxMove === '+' && moveSet == 'barehands') {
              stances[i][1] = doublesStances[0];
              stances[i][2] = doublesStances[1];
            } else if (b4Move !== '+') {
              stances[i][2] = moveStances[stances[i][1]];
            } else if (nxMove !== '+' && moveSet == 'barehands') {
              if (4 === doublesStances[1] || 6 === doublesStances[1]) {
                stances[i][1] = doublesStances[0]
              } else {
                stances[i][1] = doublesStances[2]
              }
            } else {
              stances[i][2] = moveStances[stances[i][1]];
            }
            break;
          case 2:
            if (b4Move === '+' && moveSet == 'barehands') {
              stances[i][2] = doublesStances[0];
              stances[i][3] = doublesStances[1];
            } else if (stances[i][2] > 3 && moveSet == 'barehands') {
              if (stances[i][2] == doublesStances[0]) {
                stances[i][3] = doublesStances[1]
              } else {
                stances[i][3] = doublesStances[3]
              }
            } else {
              stances[i][3] = moveStances[stances[i][2]];
            }
            break;
          case 3:
            stances[i][5] = moveStances[i];
            break;
        }
      } else {
        switch (j) {
          case 0:
            if (moves[i][j + 1] === '+') 
            stances[i][1] = -1;
            break;
          case 1:
            if (moves[i][j + 1] === '+') 
            stances[i][2] = -1;
          case 2:
            stances[i][3] = -1;
          case 3:
            stances[i][5] = -1;
        }
      }
    }
  }

  return stances;
}

export default updateStances;