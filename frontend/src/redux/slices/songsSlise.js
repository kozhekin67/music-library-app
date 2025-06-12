import { createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: {
    songs: [],
  },

  reducers: {
    addSong: (state, action) => {
      state.songs = [...state.songs, action.payload];
    },

    deleteSong(state, action) {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
    },
  },
});

export const { addSong, deleteSong } = songsSlice.actions;

export default songsSlice.reducer;
