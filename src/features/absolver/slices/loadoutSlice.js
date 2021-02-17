import { createSlice } from '@reduxjs/toolkit'

export const loadoutSlice = createSlice({
  name: 'loadout',
  initialState: {
    deckType: 'barehands',
    style: 'none', 
    powerChoices: ['none', 'none'],
    deckHistory: [{
        'barehands': [
          Array(4).fill("+"),
          Array(4).fill("+"),
          Array(4).fill("+"),
          Array(4).fill("+")
        ],
        'wargloves': [
          Array(4).fill("+"),
          Array(4).fill("+"),
          Array(4).fill("+"),
          Array(4).fill("+")
        ],
        'sword': [
          Array(4).fill("+"),
          Array(4).fill("+"),
          Array(4).fill("+"),
          Array(4).fill("+")
        ]
  }],
  reducers: {
    switchDeckType: (state, action) => {
      var payload = action.payload;
      if (["barehands", 'wargloves', 'sword'].includes(payload)) {
        state.deckType = payload;
      }
    },
    setPower: (state, action) => {
      var payload = action.payload;
      if (payload[0] !== null) {
        state.power[0] = payload[0];
      }

      if (payload[1] !== null) {
        state.power[1] = payload[1]
      }
    },
    setStyle: (state, action) => {
      var payload = action.payload;
      if (['forsaken','windfall', 'kahlt', 'stagger', 'faejin', 'lost prospect'].includes(payload)) {
        state.style = payload
      }
    },
    updateDecks: (state, action) => {
      var payload = action.payload;
      var currentDeck = state.deckHistory[state.deckHistory.length - 1];
      var changedDecks = payload.keys();
      changedDecks.foreach(key => {
          if (currentDeck.keys().includes(key)) {
            currentDeck[key] = changedDecks[key];
          }
        }
      )
      state.deckHistory = state.deckHistory.push(currentDeck);      
    },
    undoChange: state => {
      state.deckHistory = state.deckHistory.pop();
    }
  }
})

export const { switchDeckType, setPower, setStyle, updateDecks, undoChange } = loadoutSlice.actions;
export const selectStyle = state => state.loadout.style;
export const selectDeckType = state => state.loadout.deckType;
export const selectPowers = state => state.loadout.powerChoices;
export const getDeckHistory = state => state.loadout.deckHistory;
export const getCurrentDecks = state => state.loadout.deckHistory[state.loadout.deckHistory.length - 1];
export default loadoutSlice.reducer;