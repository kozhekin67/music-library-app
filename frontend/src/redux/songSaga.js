import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { setSongs, addSong, deleteSong, editSong } from './slices/songsSlice';

const API_URL = 'https://my-json-server-46c7.vercel.app/songs';

function* fetchSongs() {
  const response = yield call(axios.get, API_URL);
  yield put(setSongs(response.data));
}

function* createSong(action) {
  const response = yield call(axios.post, API_URL, action.payload);
  yield put(addSong(response.data));
}

function* removeSong(action) {
  const id = action.payload;
  yield call(axios.delete, `${API_URL}/${id}`);
  yield put(deleteSong(id));
}

function* editingSong(action) {
  const id = action.payload.id;
  const dataToUpdate = action.payload;
  console.log(dataToUpdate);
  yield call(axios.put, `${API_URL}/${id}`, dataToUpdate);
  yield put(editSong(dataToUpdate));
}

export function* songSaga() {
  yield takeEvery('songs/fetchSongs', fetchSongs);
  yield takeEvery('songs/createSong', createSong);
  yield takeEvery('songs/removeSong', removeSong);
  yield takeEvery('songs/editingSong', editingSong);
}
