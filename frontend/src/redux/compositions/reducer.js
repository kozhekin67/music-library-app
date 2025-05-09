import * as a from './actionTypes';

const initialState = [];

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_SONG:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default songsReducer;
