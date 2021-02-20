import { createSlice } from '@reduxjs/toolkit';
import * as data from '../Moves.js';

var num2Stan = {
  0: "FRONT_RIGHT",
  1: "FRONT_LEFT",
  2: "BACK_RIGHT",
  3: "BACK_LEFT"
}

var stan2Num = {
  "FRONT_RIGHT": 0,
  "FRONT_LEFT": 1,
  "BACK_RIGHT": 2,
  "BACK_LEFT": 3
}

export const loadoutSlice = createSlice({
  name: 'loadout',
  initialState: {
    targetDeckType: 'barehands',
    style: 'none', 
    powers: ['none', 'none'],
    targetRow: -1,
    targetColumn: -1,
    barehandsMoveData: data.getBareHands(),
    swordMoveData: data.getSword(),
    sideBarIsOpen: false, 
    hoveredMove: 'none',
    activeMove: 'none',
    stanceDiamonds: [
      [0, -1, -1, -1, 0, -1],
      [1, -1, -1, -1, 1, -1],
      [2, -1, -1, -1, 2, -1],
      [3, -1, -1, -1, 3, -1],
    ],
    barehandsCurrent: [[
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
    ]],
    warglovesCurrent: [[
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
    ]],
    swordCurrent: [[
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
      ['+', '+', '+', '+'],
    ]],
  },
  reducers: {
    setTargetDeckType: (state, action) => {
      if (["barehands", 'wargloves', 'sword'].includes(action.payload)) {
        state.targetDeckType = action.payload;
      }
      else {
        throw 'Submitted value not a valid deck type.';
      }
    },
    setPowers: (state, action) => {
      var payload = action.payload;
      if (payload[0] !== null) {
        state.power[0] = payload[0];
      }

      if (payload[1] !== null) {
        state.powers[1] = payload[1]
      }
    },
    setStyle: (state, action) => {
      var payload = action.payload;
      if (['forsaken',
           'windfall', 
           'kahlt', 
           'stagger', 
           'faejin', 
           'lost prospect'].includes(payload)) {
        state.style = payload
      }
      else {
        throw 'Submitted string not a valid style.';
      }
    },
    updateBarehandsDeck: (state, action) => {
      state.barehandsCurrent[state.barehandsCurrent.length - 1][state.targetRow][state.targetColumn] = action.payload;
      var moveStances = data.getBareHands().find(x => x['name'] == action.payload)['stance']['barehands'];
      switch (state.targetColumn) {
        case 0:
          state.stanceDiamonds[state.targetRow][1] = stan2Num[moveStances[num2Stan[state.targetRow]]];
          break;
        case 1:
          if ([0, 1, 2, 3].includes(state.stanceDiamonds[state.targetRow][1])) {
            state.stanceDiamonds[state.targetRow][2] = stan2Num[moveStances[num2Stan[state.stanceDiamonds[state.targetRow][1]]]];
          }
          else {
            state.stanceDiamonds[state.targetRow][2] = stan2Num[Object.entries(moveStances)[0][1]];
          }
          break;
        case 2:
          if ([0, 1, 2, 3].includes(state.stanceDiamonds[state.targetRow][2])) {
            state.stanceDiamonds[state.targetRow][3] = stan2Num[moveStances[num2Stan[state.stanceDiamonds[state.targetRow][2]]]];
          }
          else {
            state.stanceDiamonds[state.targetRow][3] = stan2Num[Object.entries(moveStances)[0][1]];
          }
          break;
        case 3:
          state.stanceDiamonds[state.targetRow][5] = stan2Num[moveStances[num2Stan[state.targetRow]]];
          break;
      }
    },
    updateWarglovesDeck: (state, action) => {
      state.warglovesCurrent[state.warglovesCurrent.length - 1][state.targetRow][state.targetColumn] = action.payload;
      var currentDeck = state.barehandsDeck;
      var currentMoveSet = state.barehandsMoveData;
      var currentTargetDeckType = 'barehands';
      var moveStances = currentMoveSet.find(x => x['name'] === action.payload)['stance'][state.targetDeckType];
      switch (state.column) {
        case 0:
          state.stanceDiamonds[1] = stan2Num[moveStances[num2Stan[state.row]]];
          break;
        case 1:
          state.stanceDiamonds[1] = state.stanceDiamonds[1];
          state.stanceDiamonds[2] = stan2Num[moveStances[num2Stan[1]]];
          break;
        case 2:
          state.stanceDiamonds[2] = state.stanceDiamonds[2];
          state.stanceDiamonds[3] = stan2Num[moveStances[num2Stan[2]]];
          break;
        case 3:
          state.stanceDiamonds[5] = stan2Num[moveStances[num2Stan[state.row]]];
          break;
      }
    },
    updateSwordDeck: (state, action) => {
      state.swordCurrent[state.swordCurrent.length - 1][state.targetRow][state.targetColumn] = action.payload;
      var currentDeck = state.swordDeck;
      var currentMoveSet = state.swordsMoveData;
      var currentTargetDeckType = 'sword';
      var moveStances = currentMoveSet.find(x => x['name'] === action.payload)['stance'][state.targetDeckType];
      switch (state.column) {
        case 0:
          state.stanceDiamonds[1] = stan2Num[moveStances[num2Stan[state.row]]];
          break;
        case 1:
          state.stanceDiamonds[1] = state.stanceDiamonds[1];
          state.stanceDiamonds[2] = stan2Num[moveStances[num2Stan[1]]];
          break;
        case 2:
          state.stanceDiamonds[2] = state.stanceDiamonds[2];
          state.stanceDiamonds[3] = stan2Num[moveStances[num2Stan[2]]];
          break;
        case 3:
          state.stanceDiamonds[5] = stan2Num[moveStances[num2Stan[state.row]]];
          break;
      }    
    },
    setHoveredMove: (state, action) => {
      state.hoveredMove = action.payload;
    },
    setActiveMove: (state, action) => {
      state.activeMove = action.payload;
    },
    setSidebar: (state, action) => {
      state.sideBarIsOpen = action.payload;
    },
    toggleSidebar: state => {
      state.sideBarIsOpen = !state.sideBarIsOpen;
    },
    setTargetRow: (state, action) => {
      if ([-1, 0, 1, 2, 3].includes(action.payload)){
        state.targetRow = action.payload;
      }
      else {
        throw 'Row target contains invalid value.';
      }
    },
    setTargetColumn: (state, action) => {
      if ([-1, 0, 1, 2, 3].includes(action.payload)){
        state.targetColumn = action.payload;
      }
      else {
        throw 'Column target contains invalid value.';
      }
    },
    setStanceDiamonds: (state, action) => {
     
    }
  }
})

export const {setTargetDeckType, 
              setPowers, 
              setStyle, 
              updateBarehandsDeck, 
              updateWarglovesDeck, 
              updateSwordDeck, 
              setHoveredMove, 
              setSidebar, 
              toggleSidebar, 
              setTargetRow, 
              setTargetColumn,
              setActiveMove} = loadoutSlice.actions;
export const selectStyle = state => state.loadout.style;
export const selectTargetDeckType = state => state.loadout.targetDeckType;
export const selectPowers = state => state.loadout.powerChoices;
export const selectBarehandsDeck = state => state.loadout.barehandsCurrent[state.loadout.barehandsCurrent.length - 1];
export const selectWarglovesDeck = state => state.loadout.warglovesCurrent[state.loadout.warglovesCurrent.length - 1];
export const selectSwordDeck = state => state.loadout.swordCurrent[state.loadout.swordCurrent.length - 1];
export const selectStanceDiamonds = state => state.loadout.stanceDiamonds;
export const selectSidebarState = state => state.loadout.sideBarIsOpen;
export const selectHoveredMove = state => state.loadout.hoveredMove;
export const selectActiveMove = state => state.loadout.activeMove;
export const selectBarehandMoveData = state => state.loadout.barehandsMoveData;
export const selectSwordMoveData = state => state.loadout.swordMoveData;
export const selectTargetRow = state => state.loadout.targetRow;
export const selectTargetColumn = state => state.loadout.targetColumn;

export default loadoutSlice.reducer;