import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import SelectedSlot from '../Types/SelectedSlot';

const initialArray = [] as SelectedSlot[];

export const selectedSlotsSlice = createSlice({
  name: 'slots',
  initialState: {
    selectedSlots: initialArray
  },
  reducers: {
    addSlot: (state , action: PayloadAction<SelectedSlot>) => {
      state.selectedSlots.push(action.payload)
    },
    removeSlot: (state, action: PayloadAction<SelectedSlot>) => {
      const newState = state.selectedSlots.filter(element => element.id !== action.payload.id);
      state.selectedSlots = newState;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addSlot, removeSlot } = selectedSlotsSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const state = (state: RootState) => state;
export default selectedSlotsSlice.reducer