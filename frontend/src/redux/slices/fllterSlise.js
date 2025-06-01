import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTextFilter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setTextFilter } = filterSlice.actions;

export const selectTextFilter = (state) => state.filter.text;

export default filterSlice.reducer;
