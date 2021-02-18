import Movebar from './Movebar';
import Movedisplay from './Movedisplay';
import * as data from './Moves.js';
import Stance from './Stance.js';
import React, { useState } from 'react';



function Movelist(props) {
  var numberToStance = {
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

  var moveData = data.getBareHands().filter(x => Object.keys(x['stance'][props.deckType]).includes(numberToStance[props.row]));

  const stances = moveData.map(move => {
    var myKeys = Object.keys(move['stance'][props.deckType]);
    console.log(myKeys);
    if (myKeys.length == 1) {
        return (
          <React.Fragment>
          <td><Stance dir={stanceToNumber[myKeys[0]]}></Stance></td>
          <td><Stance dir={stanceToNumber[move['stance'][props.deckType][myKeys[0]]]}></Stance></td>
          </React.Fragment>
        )
    }
    else {
        <React.Fragment>
        <td><Stance dir={stanceToNumber[myKeys[0]]}></Stance><Stance dir={stanceToNumber[myKeys[1]]}></Stance></td>
        <td><Stance dir={stanceToNumber[move['stance'][props.deckType][myKeys[0]]]}></Stance><Stance dir={stanceToNumber[move['stance'][props.deckType][myKeys[1]]]}></Stance></td>
        </React.Fragment>
      }
    })
  const moves = moveData.map(move => {
    var myKeys = Object.keys(move['stance'][props.deckType]);
    console.log(move);
    return (
      <tr key={move['name']}>
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
            <td><Stance dir={stanceToNumber[move['stance'][props.deckType][myKeys[0]]]}></Stance><Stance dir={stanceToNumber[move['stance'][props.deckType][myKeys[1]]]}></Stance></td>
        </React.Fragment>
      }
      </tr>
    );
  });

  return (
    <div className="Absolver-movelist">
      <Movebar />
      <table>
        <tr>
          <th>Name</th>
          <th>Style</th>
          <th>Type</th>
          <th>Power</th>
          <th>Strength</th>
          <th>Dexterity</th>
          <th>Mobility</th>
          <th>Damage</th>
          <th>Range</th>
          <th>Stamina</th>
          <th>Impact</th>
          <th>Startup</th>
          <th>Adv on Hit</th>
          <th>Adv on Guard</th>
          <th>Starts in</th>
          <th>ends in</th>
        </tr>
        <tbody>{moves}</tbody>
      </table>
    </div>
  )
}

export default Movelist;