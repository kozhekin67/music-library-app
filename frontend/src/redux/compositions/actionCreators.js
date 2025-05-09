import * as a from './actionTypes';

export const addSong = (newSong) => {
  return {
    type: a.ADD_SONG,
    payload: newSong,
  };
};
