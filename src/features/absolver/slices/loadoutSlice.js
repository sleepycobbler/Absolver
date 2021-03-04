import {
  createSlice
} from '@reduxjs/toolkit';
import * as data from '../Moves.js';
import updateStances from '../stanceUpdate.js'

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
    barehandsCurrent: [
      [
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
      ]
    ],
    warglovesCurrent: [
      [
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
      ]
    ],
    swordCurrent: [
      [
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
        ['+', '+', '+', '+'],
      ]
    ],
  },
  reducers: {
    setTargetDeckType: (state, action) => {
      if (["barehands", 'wargloves', 'sword'].includes(action.payload)) {
        switch (action.payload) {
          case "barehands":
            state.targetDeckType = action.payload;
            state.stanceDiamonds = updateStances(state.stanceDiamonds, state.barehandsCurrent[state.barehandsCurrent.length - 1], action.payload);
            break;
          case "wargloves":
            state.targetDeckType = action.payload;
            state.stanceDiamonds = updateStances(state.stanceDiamonds, state.warglovesCurrent[state.warglovesCurrent.length - 1], action.payload);
            break;
          case "sword":
            state.targetDeckType = action.payload;
            state.stanceDiamonds = updateStances(state.stanceDiamonds, state.swordCurrent[state.swordCurrent.length - 1], action.payload);
            break;
        }
        state.targetDeckType = action.payload;
      } else {
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
          'lost prospect'
        ].includes(payload)) {
        state.style = payload
      } else {
        throw 'Submitted string not a valid style.';
      }
    },
    updateBarehandsDeck: (state, action) => {
      state.barehandsCurrent[state.barehandsCurrent.length - 1][state.targetRow][state.targetColumn] = action.payload;
      state.stanceDiamonds = updateStances(state.stanceDiamonds, state.barehandsCurrent[state.barehandsCurrent.length - 1], state.targetDeckType);
    },
    moveRemove: (state, action) => {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (state.barehandsCurrent[state.barehandsCurrent.length - 1][i][j] === action.payload) {
            state.barehandsCurrent[state.barehandsCurrent.length - 1][i][j] = '+';
          }
        }
      }
      state.stanceDiamonds = updateStances(state.stanceDiamonds, state.barehandsCurrent[state.barehandsCurrent.length - 1], state.targetDeckType);
    },
    updateWarglovesDeck: (state, action) => {
      state.warglovesCurrent[state.warglovesCurrent.length - 1][state.targetRow][state.targetColumn] = action.payload;
      state.stanceDiamonds = updateStances(state.stanceDiamonds, state.warglovesCurrent[state.warglovesCurrent.length - 1], state.targetDeckType);
    },
    updateSwordDeck: (state, action) => {
      state.swordCurrent[state.swordCurrent.length - 1][state.targetRow][state.targetColumn] = action.payload;
      state.stanceDiamonds = updateStances(state.stanceDiamonds, state.swordCurrent[state.swordCurrent.length - 1], state.targetDeckType);
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
      if ([-1, 0, 1, 2, 3].includes(action.payload)) {
        state.targetRow = action.payload;
      } else {
        throw 'Row target contains invalid value.';
      }
    },
    setTargetColumn: (state, action) => {
      if ([-1, 0, 1, 2, 3].includes(action.payload)) {
        state.targetColumn = action.payload;
      } else {
        throw 'Column target contains invalid value.';
      }
    },
    setStanceDiamonds: (state, action) => {

    }
  }
})

export const {
  setTargetDeckType,
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
  setActiveMove,
  moveRemove
} = loadoutSlice.actions;
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