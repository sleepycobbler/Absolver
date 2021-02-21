import Movebar from './Movebar';
import * as data from './Moves.js';
import Stance from './Stance.js';
import React, { useState } from 'react';



function Movelist(props) {
  var numberToStance = {
    '+': "",
    0: "FRONT_RIGHT",
    1: "FRONT_LEFT",
    2: "BACK_RIGHT",
    3: "BACK_LEFT"
  }

  var stanceToNumber = {
    "FRONT_RIGHT": 0,
    "FRONT_LEFT": 1,
    "BACK_RIGHT": 2,
    "BACK_LEFT": 3
  }

  var moveData;
  var movesDeckType = props.deckType==='sword' ?  "sword": 'barehands';

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

  if (props.column === 3) {
    for (const checkMove of moveData) {
      moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes(numberToStance[props.row]));
      const [key, value] = Object.entries(checkMove['stance'][movesDeckType])[0];
      if (key === value) {
        moveData = moveData.filter(x => x['name'] !== checkMove['name']);
      }
    }
  }
  else {
    if (stance1 > -1){
      moveData = moveData.filter(x => Object.keys(x['stance'][movesDeckType]).includes(numberToStance[stance1]));
    }
    if (stance2 > -1) {
      moveData = moveData.filter(x => Object.values(x['stance'][movesDeckType]).includes(numberToStance[stance2]));
    }
  }

  for (var row of props.usedMoves) {
    for (var usedMove of row) {
      moveData = moveData.filter(x => x['name'] !== usedMove);
    }
  }

  const moves = moveData.map(move => {
    var myKeys = Object.keys(move['stance'][movesDeckType]);
    return (
      <tr className={'rowMove'} key={move['name']} onClick={() => props.rowClick(move['name'], props.row, props.column, props.deckType)}>
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
        {myKeys.length == 1 ?
          <React.Fragment>
          <td><Stance dir={stanceToNumber[myKeys[0]]}></Stance></td>
          <td><Stance dir={stanceToNumber[move['stance'][props.deckType][myKeys[0]]]}></Stance></td>
          </React.Fragment>
          :
            <React.Fragment>
            <td><Stance dir={stanceToNumber[myKeys[0]]}></Stance><Stance dir={stanceToNumber[myKeys[1]]}></Stance></td>
            <td><Stance dir={stanceToNumber[move['stance'][props.deckType==='sword' ?  "sword": 'barehands'][myKeys[0]]]}></Stance><Stance dir={stanceToNumber[move['stance'][props.deckType==='sword' ?  "sword": 'barehands'][myKeys[1]]]}></Stance></td>
        </React.Fragment>
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