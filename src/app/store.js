import { configureStore } from '@reduxjs/toolkit';
import loadoutReducer from '../features/absolver/slices/loadoutSlice'

export default configureStore({
  reducer: {
    loadout: loadoutReducer,
  },
});
