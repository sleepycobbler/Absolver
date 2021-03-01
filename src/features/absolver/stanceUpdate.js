import * as data from '../Moves.js';

function mergeStance(stanDict) {
    var stan1 = Number(Object.keys(stanDict)[0])
    var stan2 = Number(Object.keys(stanDict)[1])
    var stan3 = Number(Object.values(stanDict)[0])
    var stan4 = Number(Object.values(stanDict)[1])
    switch ([stan1, stan2, stan3, stan4].join('')) {
      case '0110':
      case '1001':
        return [4, 5];
      case '0101':
      case '1010':
        return [4, 4];
      case '0132':
      case '1023':
        return [4, 6];
      case '0123':
      case '1032':
        return [5, 6];
      case '3232':
      case '2323':
        return [6, 6];
      case '3223':
      case '2332':
        return [6, 7];
      case '3201':
      case '2310':
        return [6, 4];
      case '3210':
      case '2301':
        return [6, 5];
    }
  }

function updateStances(stances, moves) {
    var moveData = data.getBareHands()

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (moves[i][j] !== '+') {
                var moveStances = moveData.find(x => x['name'] == moves[i][j])['stance']['barehands'];
                switch (j) {
                    case 0:
                        stances[i][1] = moveStances[i];
                        break;
                    case 1:
                        b4Move = moves[i][j - 1];
                        if (b4Move === '+') {
                            let doublesStances = mergeStance(moveStances);
                            stances[i][1] = doublesStances[0];
                            stances[i][2] = doublesStances[1];
                        }
                        else {
                            stances[i][2] = moveStances[stances[1]];
                        }
                        break;
                    case 2:
                        b4Move = moves[i][j - 1];
                        if (b4Move === '+') {
                            let doublesStances = mergeStance(moveStances);
                            stances[i][2] = doublesStances[0];
                            stances[i][3] = doublesStances[1];
                        }
                        else {
                            stances[i][3] = moveStances[stances[2]];
                        }
                        break;
                    case 3:
                        stances[i][5] = moveStances[i];
                        break;
                } 
            }   
        }
    }

    return stances;
}

