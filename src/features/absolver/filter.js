import Movebar from './Movebar';
import * as data from './Moves.js';
import Stance from './Stance.js';
import React, { useState } from 'react';

function filterMoves(props) {
  var moveData;
  var movesDeckType = props.deckType==='sword' ?  'sword': 'barehands';

  switch (props.column) {
    case 0:
      var stance1 = props.stances[0];
      var stance2 = props.stances[1];
      break;
    case 1:
      var stance1 = props.stances[1];
      var stance2 = props.stances[2];
      break;
    case 2:
      var stance1 = props.stances[2];
      var stance2 = props.stances[3];
      break;
    case 3:
      var stance1 = props.stances[4];
      var stance2 = props.stances[5];
      break;
  }

  props.deckType==='sword' ? 
  (moveData = data.getSword()) : 
  (moveData = data.getBareHands());

  if (stance1 > 3 && stance2 > 3) {
      moveData = moveData;
      switch (stance1){
        case 4:
        case 5:
            moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes('0') ||
                                            Object.keys(x['stance'][movesDeckType]).includes('1'));
            break;
        case 6:
        case 7:
            moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes('2') ||
                                            Object.keys(x['stance'][movesDeckType]).includes('3'));
            break;
      }
  }
  else if (stance1 > 3) {
    switch (stance1){
        case 4:
        case 5:
            moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes('0') ||
                                            Object.keys(x['stance'][movesDeckType]).includes('1'));
            break;
        case 6:
        case 7:
            moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes('2') ||
                                            Object.keys(x['stance'][movesDeckType]).includes('3'));
            break;
      }
  }
  else if (stance2 > 3 && stance1 > -1) {
    switch (stance2){
      case 4:
      case 5:
          moveData = moveData.filter(x => Object.values(x['stance'][movesDeckType]).includes(0) ||
                                          Object.values(x['stance'][movesDeckType]).includes(1))
          break;
      case 6:
      case 7:
          moveData = moveData.filter(x => Object.values(x['stance'][movesDeckType]).includes(2) ||
                                          Object.values(x['stance'][movesDeckType]).includes(3))
          break;
    }
    moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes(stance1.toString()));
  }
  else if (stance2 > 3) {
      switch (stance2){
        case 4:
        case 5:
            moveData = moveData.filter(x => Object.values(x['stance'][movesDeckType]).includes(0) ||
                                            Object.values(x['stance'][movesDeckType]).includes(1))
            break;
        case 6:
        case 7:
            moveData = moveData.filter(x => Object.values(x['stance'][movesDeckType]).includes(2) ||
                                            Object.values(x['stance'][movesDeckType]).includes(3))
            break;
      }
    }
  else if (props.column === 3) {
    moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes(stance1.toString()));
    moveData = moveData.filter(x => x['stance'][movesDeckType][stance1] !== stance1);
  }
  else {
    if (stance1 > -1){
      moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes(stance1.toString()));
    }
    if (stance2 > -1) {
      moveData = moveData.filter(x => Object.values(x['stance'][movesDeckType]).includes(stance2));
    }
  }

  for (var row of props.usedMoves) {
    for (var usedMove of row) {
      moveData = moveData.filter(x => x['name'] !== usedMove);
    }
  }

  return moveData;
}

export default filterMoves;