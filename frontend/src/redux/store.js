import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './compositions/reducer';
import filterReducer from './slices/fllterSlise';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    filter: filterReducer,
  },
});
export default store;
