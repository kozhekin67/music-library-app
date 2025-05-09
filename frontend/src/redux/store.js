import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './compositions/reducer';

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});
export default store;
