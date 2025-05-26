import * as a from './actionTypes';

const initialState = [];

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_SONG:
      return [...state, action.payload];
    case a.DELELTE_SONG:
      return state.filter((song) => song.id !== action.payload);
    default:
      return state;
  }
};

export default songsReducer;
