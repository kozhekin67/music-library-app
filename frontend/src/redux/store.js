import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './slices/songsSlise';
import filterReducer from './slices/filterSlise';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    filter: filterReducer,
  },
});
export default store;
