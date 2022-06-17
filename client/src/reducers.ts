import { combineReducers } from 'redux';
import selectedSlotsSlice from './Redux/selectedSlotsSlice';

export const rootReducer = combineReducers({
  slots: selectedSlotsSlice
});

export type RootState = ReturnType<typeof rootReducer>