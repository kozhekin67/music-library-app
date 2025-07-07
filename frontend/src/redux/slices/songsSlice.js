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

    editSong(state, action) {
      const { id, author, composition, genre, date } = action.payload;
      state.songs = state.songs.map((song) =>
        song.id === id
          ? { ...song, id, author, composition, genre, date }
          : { ...song }
      );
    },

    setSongs(state, action) {
      state.songs = action.payload;
    },
  },
});

export const { addSong, deleteSong, editSong, setSongs } = songsSlice.actions;

export default songsSlice.reducer;
