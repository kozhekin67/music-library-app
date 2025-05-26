import * as a from './actionTypes';

export const addSong = (newSong) => {
  return {
    type: a.ADD_SONG,
    payload: newSong,
  };
};

export const deleteSong = (id) => {
  return {
    type: a.DELELTE_SONG,
    payload: id,
  };
};
